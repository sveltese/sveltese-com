import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Personal_access_tokensMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		tokenable_type: z.literal(true).optional(),
		tokenable_id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		token: z.literal(true).optional(),
		abilities: z.literal(true).optional(),
		last_used_at: z.literal(true).optional(),
		expires_at: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional()
	})
	.strict();

export const Personal_access_tokensMaxAggregateInputObjectSchema = Schema;
