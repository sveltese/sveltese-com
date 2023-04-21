import { z } from 'zod';
import { password_reset_tokensUpdateInputObjectSchema } from './objects/password_reset_tokensUpdateInput.schema';
import { password_reset_tokensUncheckedUpdateInputObjectSchema } from './objects/password_reset_tokensUncheckedUpdateInput.schema';
import { password_reset_tokensWhereUniqueInputObjectSchema } from './objects/password_reset_tokensWhereUniqueInput.schema';

export const password_reset_tokensUpdateOneSchema = z.object({
	data: z.union([
		password_reset_tokensUpdateInputObjectSchema,
		password_reset_tokensUncheckedUpdateInputObjectSchema
	]),
	where: password_reset_tokensWhereUniqueInputObjectSchema
});
