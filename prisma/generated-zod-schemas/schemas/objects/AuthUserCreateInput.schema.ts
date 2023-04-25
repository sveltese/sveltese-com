import { z } from 'zod'
import { AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInput.schema'
import { AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_session: z
			.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional(),
		auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema).optional()
	})
	.strict()

export const AuthUserCreateInputObjectSchema = Schema
