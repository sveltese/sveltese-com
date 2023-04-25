import { z } from 'zod'
import { AuthUserCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInput.schema'
import { AuthUserCreateOrConnectWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateOrConnectWithoutAuth_sessionInput.schema'
import { AuthUserUpsertWithoutAuth_sessionInputObjectSchema } from './AuthUserUpsertWithoutAuth_sessionInput.schema'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'
import { AuthUserUpdateWithoutAuth_sessionInputObjectSchema } from './AuthUserUpdateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedUpdateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedUpdateWithoutAuth_sessionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => AuthUserCreateWithoutAuth_sessionInputObjectSchema),
				z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => AuthUserCreateOrConnectWithoutAuth_sessionInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => AuthUserUpsertWithoutAuth_sessionInputObjectSchema).optional(),
		connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputObjectSchema),
				z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputObjectSchema = Schema
