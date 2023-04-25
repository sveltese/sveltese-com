import { z } from 'zod'
import { AuthSessionWhereUniqueInputObjectSchema } from './AuthSessionWhereUniqueInput.schema'
import { AuthSessionUpdateWithoutAuth_userInputObjectSchema } from './AuthSessionUpdateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedUpdateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedUpdateWithoutAuth_userInput.schema'
import { AuthSessionCreateWithoutAuth_userInputObjectSchema } from './AuthSessionCreateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionUpsertWithWhereUniqueWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => AuthSessionUpdateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => AuthSessionCreateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema = Schema
