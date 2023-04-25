import { z } from 'zod'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'
import { AuthUserCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_sessionInput> = z
	.object({
		where: z.lazy(() => AuthUserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AuthUserCreateWithoutAuth_sessionInputObjectSchema),
			z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema)
		])
	})
	.strict()

export const AuthUserCreateOrConnectWithoutAuth_sessionInputObjectSchema = Schema
