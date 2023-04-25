import { z } from 'zod'
import { AuthKeyCreateWithoutAuth_userInputObjectSchema } from './AuthKeyCreateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInput.schema'
import { AuthKeyCreateOrConnectWithoutAuth_userInputObjectSchema } from './AuthKeyCreateOrConnectWithoutAuth_userInput.schema'
import { AuthKeyCreateManyAuth_userInputEnvelopeObjectSchema } from './AuthKeyCreateManyAuth_userInputEnvelope.schema'
import { AuthKeyWhereUniqueInputObjectSchema } from './AuthKeyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyCreateNestedManyWithoutAuth_userInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => AuthKeyCreateWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyCreateWithoutAuth_userInputObjectSchema).array(),
				z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict()

export const AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema = Schema
