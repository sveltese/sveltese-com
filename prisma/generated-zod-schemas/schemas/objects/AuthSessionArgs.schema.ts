import { z } from 'zod'
import { AuthSessionSelectObjectSchema } from './AuthSessionSelect.schema'
import { AuthSessionIncludeObjectSchema } from './AuthSessionInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionArgs> = z
	.object({
		select: z.lazy(() => AuthSessionSelectObjectSchema).optional(),
		include: z.lazy(() => AuthSessionIncludeObjectSchema).optional()
	})
	.strict()

export const AuthSessionArgsObjectSchema = Schema
