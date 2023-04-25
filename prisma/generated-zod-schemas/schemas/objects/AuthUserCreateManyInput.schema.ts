import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateManyInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string()
	})
	.strict()

export const AuthUserCreateManyInputObjectSchema = Schema
