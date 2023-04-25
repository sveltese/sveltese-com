import { z } from 'zod'
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_sessionInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		auth_key: z
			.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema = Schema
