import { z } from 'zod';
import { password_reset_tokensCreateInputObjectSchema } from './objects/password_reset_tokensCreateInput.schema';
import { password_reset_tokensUncheckedCreateInputObjectSchema } from './objects/password_reset_tokensUncheckedCreateInput.schema';

export const password_reset_tokensCreateOneSchema = z.object({
	data: z.union([
		password_reset_tokensCreateInputObjectSchema,
		password_reset_tokensUncheckedCreateInputObjectSchema
	])
});
