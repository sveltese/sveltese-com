import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensUncheckedCreateInput> = z
	.object({
		email: z.string(),
		token: z.string(),
		created_at: z.date().optional().nullable()
	})
	.strict()

export const password_reset_tokensUncheckedCreateInputObjectSchema = Schema
