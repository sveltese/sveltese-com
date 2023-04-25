import { z } from 'zod'
import { AuthKeyWhereUniqueInputObjectSchema } from './AuthKeyWhereUniqueInput.schema'
import { AuthKeyUpdateWithoutAuth_userInputObjectSchema } from './AuthKeyUpdateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedUpdateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedUpdateWithoutAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUpdateWithWhereUniqueWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => AuthKeyUpdateWithoutAuth_userInputObjectSchema),
			z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputObjectSchema)
		])
	})
	.strict()

export const AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema = Schema
