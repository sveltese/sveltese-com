import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Team_userCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		team_id: z.literal(true).optional(),
		user_id: z.literal(true).optional(),
		role: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional(),
		_all: z.literal(true).optional()
	})
	.strict();

export const Team_userCountAggregateInputObjectSchema = Schema;
