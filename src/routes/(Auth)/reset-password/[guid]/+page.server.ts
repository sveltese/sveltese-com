import { fail } from '@sveltejs/kit'
import { z } from 'zod'
import { message, superValidate } from 'sveltekit-superforms/server'
import { prisma } from '$lib/server/prisma'
import { createHash } from 'node:crypto'

const resetPasswordSchema = z.object({
	email: z
		.string()
		.email("Email doesn't look right.")
		.refine(async (e) => {
			return await findUserByEmail(e)
		}, 'This email is not in our database.'),
	password: z.string().min(8, 'Password must be at least 8 characters.'),
	confirmPassword: z
		.string()
		.min(8, 'Password must be at least 8 characters.')
		.refine((c, d) => c === d, {
			message: 'Passwords do not match.',
			path: ['confirmPassword']
		})
})

async function findUserByEmail(email: string) {
	const user = await prisma.users.findUnique({
		where: {
			email: email
		}
	})

	return user || false
}

export const load = async ({ params, url, event }) => {
	const token = params.guid
	console.log(token)

	const hashedToken = createHash('sha256').update(token).digest('hex')
	console.log(hashedToken)

	const email = url.searchParams.get('email')
	console.log(email)

	const form = await superValidate(event, resetPasswordSchema)

	return {
		email,
		form
	}
}
