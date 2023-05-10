import { z } from 'zod'
import { password_reset_tokensUpdateManyMutationInputObjectSchema } from './objects/password_reset_tokensUpdateManyMutationInput.schema'
import { password_reset_tokensWhereInputObjectSchema } from './objects/password_reset_tokensWhereInput.schema'

export const password_reset_tokensUpdateManySchema = z.object({
	data: password_reset_tokensUpdateManyMutationInputObjectSchema,
	where: password_reset_tokensWhereInputObjectSchema.optional()
})
