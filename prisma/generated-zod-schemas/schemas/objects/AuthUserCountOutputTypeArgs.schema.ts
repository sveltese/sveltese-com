import { z } from 'zod'
import { AuthUserCountOutputTypeSelectObjectSchema } from './AuthUserCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCountOutputTypeArgs> = z
	.object({
		select: z.lazy(() => AuthUserCountOutputTypeSelectObjectSchema).optional()
	})
	.strict()

export const AuthUserCountOutputTypeArgsObjectSchema = Schema
