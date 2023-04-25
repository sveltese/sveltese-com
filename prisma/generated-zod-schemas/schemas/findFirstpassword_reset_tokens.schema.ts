import { z } from 'zod'
import { password_reset_tokensSelectObjectSchema } from './objects/password_reset_tokensSelect.schema'
import { password_reset_tokensOrderByWithRelationInputObjectSchema } from './objects/password_reset_tokensOrderByWithRelationInput.schema'
import { password_reset_tokensWhereInputObjectSchema } from './objects/password_reset_tokensWhereInput.schema'
import { password_reset_tokensWhereUniqueInputObjectSchema } from './objects/password_reset_tokensWhereUniqueInput.schema'
import { password_reset_tokensScalarFieldEnumSchema } from './enums/password_reset_tokensScalarFieldEnum.schema'

export const password_reset_tokensFindFirstSchema = z.object({
	select: password_reset_tokensSelectObjectSchema.optional(),
	orderBy: z
		.union([
			password_reset_tokensOrderByWithRelationInputObjectSchema,
			password_reset_tokensOrderByWithRelationInputObjectSchema.array()
		])
		.optional(),
	where: password_reset_tokensWhereInputObjectSchema.optional(),
	cursor: password_reset_tokensWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(password_reset_tokensScalarFieldEnumSchema).optional()
})
