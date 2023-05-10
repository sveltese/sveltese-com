import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TeamsMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		user_id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		personal_team: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional()
	})
	.strict()

export const TeamsMinAggregateInputObjectSchema = Schema
