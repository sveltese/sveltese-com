import { fail } from '@sveltejs/kit'
import { z } from 'zod'
import { superValidate } from 'sveltekit-superforms/server'

const forgotPasswordSchema = z.object({
	email: z.string().email()
})

export const load = async (event) => {
	const form = await superValidate(event, forgotPasswordSchema)
	return { form }
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, forgotPasswordSchema)
		console.log(form)

		if (!form.valid) {
			return fail(400, { form })
		}

		return { form }
	}
}
