import { z } from 'zod'
import { password_reset_tokensSelectObjectSchema } from './objects/password_reset_tokensSelect.schema'
import { password_reset_tokensCreateInputObjectSchema } from './objects/password_reset_tokensCreateInput.schema'
import { password_reset_tokensUncheckedCreateInputObjectSchema } from './objects/password_reset_tokensUncheckedCreateInput.schema'

export const password_reset_tokensCreateOneSchema = z.object({
	select: password_reset_tokensSelectObjectSchema.optional(),
	data: z.union([
		password_reset_tokensCreateInputObjectSchema,
		password_reset_tokensUncheckedCreateInputObjectSchema
	])
})