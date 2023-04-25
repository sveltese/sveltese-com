import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionAvgAggregateInputType> = z
	.object({
		active_expires: z.literal(true).optional(),
		idle_expires: z.literal(true).optional()
	})
	.strict()

export const AuthSessionAvgAggregateInputObjectSchema = Schema
