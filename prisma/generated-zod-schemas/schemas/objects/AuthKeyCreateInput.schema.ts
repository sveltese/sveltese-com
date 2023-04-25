import { z } from 'zod'
import { AuthUserCreateNestedOneWithoutAuth_keyInputObjectSchema } from './AuthUserCreateNestedOneWithoutAuth_keyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyCreateInput> = z
	.object({
		id: z.string(),
		hashed_password: z.string().optional().nullable(),
		primary_key: z.boolean(),
		expires: z.bigint().optional().nullable(),
		auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_keyInputObjectSchema)
	})
	.strict()

export const AuthKeyCreateInputObjectSchema = Schema
