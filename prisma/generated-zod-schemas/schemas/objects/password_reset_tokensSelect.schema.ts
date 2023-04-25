import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensSelect> = z
	.object({
		email: z.boolean().optional(),
		token: z.boolean().optional(),
		created_at: z.boolean().optional()
	})
	.strict()

export const password_reset_tokensSelectObjectSchema = Schema
