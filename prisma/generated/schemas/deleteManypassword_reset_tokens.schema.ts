import { z } from 'zod';
import { password_reset_tokensWhereInputObjectSchema } from './objects/password_reset_tokensWhereInput.schema';

export const password_reset_tokensDeleteManySchema = z.object({
	where: password_reset_tokensWhereInputObjectSchema.optional()
});
