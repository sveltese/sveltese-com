import { z } from 'zod'
import { AuthUserArgsObjectSchema } from './AuthUserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionInclude> = z
	.object({
		auth_user: z.union([z.boolean(), z.lazy(() => AuthUserArgsObjectSchema)]).optional()
	})
	.strict()

export const AuthSessionIncludeObjectSchema = Schema
