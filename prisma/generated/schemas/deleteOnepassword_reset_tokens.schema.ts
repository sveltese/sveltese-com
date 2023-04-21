import { z } from 'zod';
import { password_reset_tokensWhereUniqueInputObjectSchema } from './objects/password_reset_tokensWhereUniqueInput.schema';

export const password_reset_tokensDeleteOneSchema = z.object({
	where: password_reset_tokensWhereUniqueInputObjectSchema
});
