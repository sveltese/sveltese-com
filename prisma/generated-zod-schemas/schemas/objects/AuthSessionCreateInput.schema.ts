import { z } from 'zod'
import { AuthUserCreateNestedOneWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateNestedOneWithoutAuth_sessionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionCreateInput> = z
	.object({
		id: z.string(),
		active_expires: z.bigint(),
		idle_expires: z.bigint(),
		auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_sessionInputObjectSchema)
	})
	.strict()

export const AuthSessionCreateInputObjectSchema = Schema
