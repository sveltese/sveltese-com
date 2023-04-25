import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Team_userSumAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		team_id: z.literal(true).optional(),
		user_id: z.literal(true).optional()
	})
	.strict()

export const Team_userSumAggregateInputObjectSchema = Schema
