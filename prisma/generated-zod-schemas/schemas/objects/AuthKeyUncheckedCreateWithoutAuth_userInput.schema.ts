import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUncheckedCreateWithoutAuth_userInput> = z
	.object({
		id: z.string(),
		hashed_password: z.string().optional().nullable(),
		primary_key: z.boolean(),
		expires: z.bigint().optional().nullable()
	})
	.strict()

export const AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema = Schema
