import { z } from 'zod'
import { password_reset_tokensWhereUniqueInputObjectSchema } from './objects/password_reset_tokensWhereUniqueInput.schema'
import { password_reset_tokensCreateInputObjectSchema } from './objects/password_reset_tokensCreateInput.schema'
import { password_reset_tokensUncheckedCreateInputObjectSchema } from './objects/password_reset_tokensUncheckedCreateInput.schema'
import { password_reset_tokensUpdateInputObjectSchema } from './objects/password_reset_tokensUpdateInput.schema'
import { password_reset_tokensUncheckedUpdateInputObjectSchema } from './objects/password_reset_tokensUncheckedUpdateInput.schema'

export const password_reset_tokensUpsertSchema = z.object({
	where: password_reset_tokensWhereUniqueInputObjectSchema,
	create: z.union([
		password_reset_tokensCreateInputObjectSchema,
		password_reset_tokensUncheckedCreateInputObjectSchema
	]),
	update: z.union([
		password_reset_tokensUpdateInputObjectSchema,
		password_reset_tokensUncheckedUpdateInputObjectSchema
	])
})
