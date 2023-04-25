import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyAvgAggregateInputType> = z
	.object({
		expires: z.literal(true).optional()
	})
	.strict()

export const AuthKeyAvgAggregateInputObjectSchema = Schema
