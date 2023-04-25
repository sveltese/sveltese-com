import { z } from 'zod'
import { AuthSessionCreateWithoutAuth_userInputObjectSchema } from './AuthSessionCreateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInput.schema'
import { AuthSessionCreateOrConnectWithoutAuth_userInputObjectSchema } from './AuthSessionCreateOrConnectWithoutAuth_userInput.schema'
import { AuthSessionCreateManyAuth_userInputEnvelopeObjectSchema } from './AuthSessionCreateManyAuth_userInputEnvelope.schema'
import { AuthSessionWhereUniqueInputObjectSchema } from './AuthSessionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionCreateNestedManyWithoutAuth_userInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => AuthSessionCreateWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionCreateWithoutAuth_userInputObjectSchema).array(),
				z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict()

export const AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema = Schema
