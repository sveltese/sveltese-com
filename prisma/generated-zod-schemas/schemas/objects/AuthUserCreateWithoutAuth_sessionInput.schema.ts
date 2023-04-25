import { z } from 'zod'
import { AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_sessionInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema).optional()
	})
	.strict()

export const AuthUserCreateWithoutAuth_sessionInputObjectSchema = Schema
