import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.usersWhereUniqueInput> = z
	.object({
		id: z.bigint().optional(),
		email: z.string().optional()
	})
	.strict()

export const usersWhereUniqueInputObjectSchema = Schema
