import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUncheckedCreateInput> = z
	.object({
		id: z.string(),
		hashed_password: z.string().optional().nullable(),
		user_id: z.string(),
		primary_key: z.boolean(),
		expires: z.bigint().optional().nullable()
	})
	.strict()

export const AuthKeyUncheckedCreateInputObjectSchema = Schema
