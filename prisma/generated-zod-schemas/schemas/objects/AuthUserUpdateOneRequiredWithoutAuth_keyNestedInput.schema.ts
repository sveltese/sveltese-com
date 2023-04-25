import { z } from 'zod'
import { AuthUserCreateWithoutAuth_keyInputObjectSchema } from './AuthUserCreateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInput.schema'
import { AuthUserCreateOrConnectWithoutAuth_keyInputObjectSchema } from './AuthUserCreateOrConnectWithoutAuth_keyInput.schema'
import { AuthUserUpsertWithoutAuth_keyInputObjectSchema } from './AuthUserUpsertWithoutAuth_keyInput.schema'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'
import { AuthUserUpdateWithoutAuth_keyInputObjectSchema } from './AuthUserUpdateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedUpdateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedUpdateWithoutAuth_keyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_keyNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => AuthUserCreateWithoutAuth_keyInputObjectSchema),
				z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => AuthUserCreateOrConnectWithoutAuth_keyInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => AuthUserUpsertWithoutAuth_keyInputObjectSchema).optional(),
		connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => AuthUserUpdateWithoutAuth_keyInputObjectSchema),
				z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputObjectSchema = Schema
