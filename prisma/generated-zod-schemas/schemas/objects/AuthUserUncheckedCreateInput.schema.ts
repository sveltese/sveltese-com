import { z } from 'zod'
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput.schema'
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_session: z
			.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional(),
		auth_key: z
			.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserUncheckedCreateInputObjectSchema = Schema
