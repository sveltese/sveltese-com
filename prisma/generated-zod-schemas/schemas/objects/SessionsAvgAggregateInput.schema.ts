import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SessionsAvgAggregateInputType> = z
	.object({
		user_id: z.literal(true).optional(),
		last_activity: z.literal(true).optional()
	})
	.strict()

export const SessionsAvgAggregateInputObjectSchema = Schema
