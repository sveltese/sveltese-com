import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SessionsMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		user_id: z.literal(true).optional(),
		ip_address: z.literal(true).optional(),
		user_agent: z.literal(true).optional(),
		payload: z.literal(true).optional(),
		last_activity: z.literal(true).optional()
	})
	.strict()

export const SessionsMinAggregateInputObjectSchema = Schema
