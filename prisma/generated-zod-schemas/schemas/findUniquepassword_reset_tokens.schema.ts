import { z } from 'zod'
import { password_reset_tokensSelectObjectSchema } from './objects/password_reset_tokensSelect.schema'
import { password_reset_tokensWhereUniqueInputObjectSchema } from './objects/password_reset_tokensWhereUniqueInput.schema'

export const password_reset_tokensFindUniqueSchema = z.object({
	select: password_reset_tokensSelectObjectSchema.optional(),
	where: password_reset_tokensWhereUniqueInputObjectSchema
})
