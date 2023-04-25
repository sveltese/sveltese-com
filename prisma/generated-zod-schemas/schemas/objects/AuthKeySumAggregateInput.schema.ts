import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeySumAggregateInputType> = z
	.object({
		expires: z.literal(true).optional()
	})
	.strict()

export const AuthKeySumAggregateInputObjectSchema = Schema
