import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		hashed_password: z.literal(true).optional(),
		user_id: z.literal(true).optional(),
		primary_key: z.literal(true).optional(),
		expires: z.literal(true).optional()
	})
	.strict()

export const AuthKeyMaxAggregateInputObjectSchema = Schema
