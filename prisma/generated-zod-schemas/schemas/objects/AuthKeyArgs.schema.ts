import { z } from 'zod'
import { AuthKeySelectObjectSchema } from './AuthKeySelect.schema'
import { AuthKeyIncludeObjectSchema } from './AuthKeyInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyArgs> = z
	.object({
		select: z.lazy(() => AuthKeySelectObjectSchema).optional(),
		include: z.lazy(() => AuthKeyIncludeObjectSchema).optional()
	})
	.strict()

export const AuthKeyArgsObjectSchema = Schema
