import { z } from 'zod'
import { AuthUserArgsObjectSchema } from './AuthUserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeySelect> = z
	.object({
		id: z.boolean().optional(),
		hashed_password: z.boolean().optional(),
		user_id: z.boolean().optional(),
		primary_key: z.boolean().optional(),
		expires: z.boolean().optional(),
		auth_user: z.union([z.boolean(), z.lazy(() => AuthUserArgsObjectSchema)]).optional()
	})
	.strict()

export const AuthKeySelectObjectSchema = Schema
