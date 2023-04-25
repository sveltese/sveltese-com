import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionCreateWithoutAuth_userInput> = z
	.object({
		id: z.string(),
		active_expires: z.bigint(),
		idle_expires: z.bigint()
	})
	.strict()

export const AuthSessionCreateWithoutAuth_userInputObjectSchema = Schema
