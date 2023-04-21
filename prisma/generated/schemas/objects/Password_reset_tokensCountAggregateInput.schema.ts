import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Password_reset_tokensCountAggregateInputType> = z
	.object({
		email: z.literal(true).optional(),
		token: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		_all: z.literal(true).optional()
	})
	.strict();

export const Password_reset_tokensCountAggregateInputObjectSchema = Schema;
