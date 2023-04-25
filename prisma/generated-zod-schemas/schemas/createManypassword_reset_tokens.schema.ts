import { z } from 'zod'
import { password_reset_tokensCreateManyInputObjectSchema } from './objects/password_reset_tokensCreateManyInput.schema'

export const password_reset_tokensCreateManySchema = z.object({
	data: z.union([
		password_reset_tokensCreateManyInputObjectSchema,
		z.array(password_reset_tokensCreateManyInputObjectSchema)
	])
})
