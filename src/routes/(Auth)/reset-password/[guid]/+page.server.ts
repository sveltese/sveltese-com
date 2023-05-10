import { z } from 'zod'
import { message, superValidate } from 'sveltekit-superforms/server'
import { prisma } from '$lib/server/prisma'
import { createHash } from 'node:crypto'
import { fail } from '@sveltejs/kit'

const resetPasswordSchema = z.object({
	token: z.string().min(1, 'There was an error.'),
	email: z
		.string()
		.email("Email doesn't look right.")
		.refine(async (e) => {
			return await findUserByEmail(e)
		}, 'This email is not in our database.'),
	password: z.string().min(8, 'Password must be at least 8 characters.'),
	confirmPassword: z.string().min(8, 'Please confirm your password')
})

async function findUserByEmail(email: string) {
	const user = await prisma.authUser.findUnique({
		where: {
			email: email
		}
	})

	return user || false
}

export const load = async ({ params, url, event }) => {
	const token = params.guid
	const hashedToken = createHash('sha256').update(token).digest('hex')
	const email = url.searchParams.get('email')

	const form = await superValidate(event, resetPasswordSchema)

	// console.log("load")
	form.data.token = token
	form.data.email = email
	console.log(form)

	return {
		form
	}
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, resetPasswordSchema)
		console.log('action')
		console.log(form)

		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			const email = form.data.email.toLowerCase()
			const hash = createHash('sha256').update(form.data?.password).digest('hex')
			const result = await prisma.authKey.update({
				where: {
					id: 'email:' + email
				},
				data: {
					hashed_password: hash
				}
			})
			console.log(result)
			return { form }
		} catch (err) {
			return message(form, 'Password reset was unsuccessful.')
		}
	}
}
