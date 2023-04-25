import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionUncheckedCreateInput> = z
	.object({
		id: z.string(),
		user_id: z.string(),
		active_expires: z.bigint(),
		idle_expires: z.bigint()
	})
	.strict()

export const AuthSessionUncheckedCreateInputObjectSchema = Schema
