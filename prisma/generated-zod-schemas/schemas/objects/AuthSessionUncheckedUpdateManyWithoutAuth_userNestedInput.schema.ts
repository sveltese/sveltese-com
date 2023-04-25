import { z } from 'zod'
import { AuthSessionCreateWithoutAuth_userInputObjectSchema } from './AuthSessionCreateWithoutAuth_userInput.schema'
import { AuthSessionUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInput.schema'
import { AuthSessionCreateOrConnectWithoutAuth_userInputObjectSchema } from './AuthSessionCreateOrConnectWithoutAuth_userInput.schema'
import { AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema } from './AuthSessionUpsertWithWhereUniqueWithoutAuth_userInput.schema'
import { AuthSessionCreateManyAuth_userInputEnvelopeObjectSchema } from './AuthSessionCreateManyAuth_userInputEnvelope.schema'
import { AuthSessionWhereUniqueInputObjectSchema } from './AuthSessionWhereUniqueInput.schema'
import { AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema } from './AuthSessionUpdateWithWhereUniqueWithoutAuth_userInput.schema'
import { AuthSessionUpdateManyWithWhereWithoutAuth_userInputObjectSchema } from './AuthSessionUpdateManyWithWhereWithoutAuth_userInput.schema'
import { AuthSessionScalarWhereInputObjectSchema } from './AuthSessionScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema),
				z.lazy(() => AuthSessionWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => AuthSessionScalarWhereInputObjectSchema),
				z.lazy(() => AuthSessionScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict()

export const AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema = Schema
