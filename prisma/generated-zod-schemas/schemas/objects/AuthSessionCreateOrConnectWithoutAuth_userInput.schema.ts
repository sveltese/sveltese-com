import { z } from 'zod'
import { AuthSessionWhereUniqueInputObjectSchema } from './AuthSessionWhereUniqueInput.schema'
import { AuthSessionCreateWithoutAuth_userInputObjectSchema } from './AuthSessionCreateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionCreateOrConnectWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AuthSessionCreateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthSessionCreateOrConnectWithoutAuth_userInputObjectSchema = Schema
