import { z } from 'zod'
import { AuthKeyCreateWithoutAuth_userInputObjectSchema } from './AuthKeyCreateWithoutAuth_userInput.schema'
import { AuthKeyUncheckedCreateWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInput.schema'
import { AuthKeyCreateOrConnectWithoutAuth_userInputObjectSchema } from './AuthKeyCreateOrConnectWithoutAuth_userInput.schema'
import { AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema } from './AuthKeyUpsertWithWhereUniqueWithoutAuth_userInput.schema'
import { AuthKeyCreateManyAuth_userInputEnvelopeObjectSchema } from './AuthKeyCreateManyAuth_userInputEnvelope.schema'
import { AuthKeyWhereUniqueInputObjectSchema } from './AuthKeyWhereUniqueInput.schema'
import { AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema } from './AuthKeyUpdateWithWhereUniqueWithoutAuth_userInput.schema'
import { AuthKeyUpdateManyWithWhereWithoutAuth_userInputObjectSchema } from './AuthKeyUpdateManyWithWhereWithoutAuth_userInput.schema'
import { AuthKeyScalarWhereInputObjectSchema } from './AuthKeyScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyUpdateManyWithoutAuth_userNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema),
				z.lazy(() => AuthKeyWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputObjectSchema),
				z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema),
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict()

export const AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema = Schema
