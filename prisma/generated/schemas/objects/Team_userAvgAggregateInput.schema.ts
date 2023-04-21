import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Team_userAvgAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		team_id: z.literal(true).optional(),
		user_id: z.literal(true).optional()
	})
	.strict();

export const Team_userAvgAggregateInputObjectSchema = Schema;
