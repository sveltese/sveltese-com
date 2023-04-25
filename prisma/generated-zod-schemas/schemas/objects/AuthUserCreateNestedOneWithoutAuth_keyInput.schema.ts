import { z } from 'zod'
import { AuthUserCreateWithoutAuth_keyInputObjectSchema } from './AuthUserCreateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInput.schema'
import { AuthUserCreateOrConnectWithoutAuth_keyInputObjectSchema } from './AuthUserCreateOrConnectWithoutAuth_keyInput.schema'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_keyInput> = z
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
		connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional()
	})
	.strict()

export const AuthUserCreateNestedOneWithoutAuth_keyInputObjectSchema = Schema
