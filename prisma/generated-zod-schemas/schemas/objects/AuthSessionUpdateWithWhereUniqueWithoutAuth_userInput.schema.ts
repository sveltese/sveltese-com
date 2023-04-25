import { z } from 'zod'
import { AuthSessionWhereUniqueInputObjectSchema } from './AuthSessionWhereUniqueInput.schema'
import { AuthSessionUpdateWithoutAuth_userInputObjectSchema } from './AuthSessionUpdateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedUpdateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedUpdateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionUpdateWithWhereUniqueWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => AuthSessionUpdateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema = Schema
