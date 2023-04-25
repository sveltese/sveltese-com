import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensWhereUniqueInput> = z
	.object({
		email: z.string().optional()
	})
	.strict()

export const password_reset_tokensWhereUniqueInputObjectSchema = Schema
