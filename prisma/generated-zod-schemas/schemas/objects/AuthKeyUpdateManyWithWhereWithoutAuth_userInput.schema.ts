import { z } from 'zod'
import { AuthKeyScalarWhereInputObjectSchema } from './AuthKeyScalarWhereInput.schema'
import { AuthKeyUpdateManyMutationInputObjectSchema } from './AuthKeyUpdateManyMutationInput.schema'
import { AuthKeyUncheckedUpdateManyWithoutAuth_keyInputObjectSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_keyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUpdateManyWithWhereWithoutAuth_userInput> = z
	.object({
		where: z.lazy(() => AuthKeyScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => AuthKeyUpdateManyMutationInputObjectSchema),
			z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_keyInputObjectSchema)
		])
	})
	.strict()

export const AuthKeyUpdateManyWithWhereWithoutAuth_userInputObjectSchema = Schema
