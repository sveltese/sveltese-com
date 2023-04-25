import { z } from 'zod'
import { AuthKeyWhereUniqueInputObjectSchema } from './AuthKeyWhereUniqueInput.schema'
import { AuthKeyUpdateWithoutAuth_userInputObjectSchema } from './AuthKeyUpdateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedUpdateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedUpdateWithoutAuth_userInput.schema'
import { AuthKeyCreateWithoutAuth_userInputObjectSchema } from './AuthKeyCreateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUpsertWithWhereUniqueWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => AuthKeyUpdateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => AuthKeyCreateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema = Schema
