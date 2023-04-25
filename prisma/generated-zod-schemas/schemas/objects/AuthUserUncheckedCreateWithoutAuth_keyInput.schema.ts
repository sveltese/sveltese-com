import { z } from 'zod'
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_keyInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_session: z
			.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema = Schema
