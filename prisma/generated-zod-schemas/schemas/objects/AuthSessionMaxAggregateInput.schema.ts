import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		user_id: z.literal(true).optional(),
		active_expires: z.literal(true).optional(),
		idle_expires: z.literal(true).optional()
	})
	.strict()

export const AuthSessionMaxAggregateInputObjectSchema = Schema
