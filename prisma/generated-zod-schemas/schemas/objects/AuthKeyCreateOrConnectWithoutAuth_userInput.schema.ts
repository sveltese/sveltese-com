import { z } from 'zod'
import { AuthKeyWhereUniqueInputObjectSchema } from './AuthKeyWhereUniqueInput.schema'
import { AuthKeyCreateWithoutAuth_userInputObjectSchema } from './AuthKeyCreateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyCreateOrConnectWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AuthKeyCreateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthKeyCreateOrConnectWithoutAuth_userInputObjectSchema = Schema
