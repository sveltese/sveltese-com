import { z } from 'zod'
import { AuthSessionScalarWhereInputObjectSchema } from './AuthSessionScalarWhereInput.schema'
import { AuthSessionUpdateManyMutationInputObjectSchema } from './AuthSessionUpdateManyMutationInput.schema'
import { AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputObjectSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_sessionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionUpdateManyWithWhereWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthSessionScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => AuthSessionUpdateManyMutationInputObjectSchema),
			z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputObjectSchema)
		])
	})
	.strict()

export const AuthSessionUpdateManyWithWhereWithoutAuth_userInputObjectSchema = Schema
