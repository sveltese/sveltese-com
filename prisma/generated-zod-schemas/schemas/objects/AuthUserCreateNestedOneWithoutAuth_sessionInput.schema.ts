import { z } from 'zod'
import { AuthUserCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInput.schema'
import { AuthUserCreateOrConnectWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateOrConnectWithoutAuth_sessionInput.schema'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_sessionInput> = z
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
		connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional()
	})
	.strict()

export const AuthUserCreateNestedOneWithoutAuth_sessionInputObjectSchema = Schema
