import { z } from 'zod'
import { AuthUserSelectObjectSchema } from './AuthUserSelect.schema'
import { AuthUserIncludeObjectSchema } from './AuthUserInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserArgs> = z
	.object({
		select: z.lazy(() => AuthUserSelectObjectSchema).optional(),
		include: z.lazy(() => AuthUserIncludeObjectSchema).optional()
	})
	.strict()

export const AuthUserArgsObjectSchema = Schema
