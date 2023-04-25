import { z } from 'zod'
import { AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_keyInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_session: z
			.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserCreateWithoutAuth_keyInputObjectSchema = Schema
