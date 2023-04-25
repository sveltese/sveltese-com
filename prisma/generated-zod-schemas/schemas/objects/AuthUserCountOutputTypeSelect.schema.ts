import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCountOutputTypeSelect> = z
	.object({
		auth_session: z.boolean().optional(),
		auth_key: z.boolean().optional()
	})
	.strict()

export const AuthUserCountOutputTypeSelectObjectSchema = Schema
