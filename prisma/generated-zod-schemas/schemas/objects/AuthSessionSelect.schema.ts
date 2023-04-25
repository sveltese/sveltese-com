import { z } from 'zod'
import { AuthUserArgsObjectSchema } from './AuthUserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionSelect> = z
	.object({
		id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		active_expires: z.boolean().optional(),
		idle_expires: z.boolean().optional(),
		auth_user: z.union([z.boolean(), z.lazy(() => AuthUserArgsObjectSchema)]).optional()
	})
	.strict()

export const AuthSessionSelectObjectSchema = Schema
