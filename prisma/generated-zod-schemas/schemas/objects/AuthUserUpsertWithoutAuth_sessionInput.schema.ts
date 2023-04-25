import { z } from 'zod'
import { AuthUserUpdateWithoutAuth_sessionInputObjectSchema } from './AuthUserUpdateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedUpdateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedUpdateWithoutAuth_sessionInput.schema'
import { AuthUserCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserCreateWithoutAuth_sessionInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_sessionInput> = z
	.object({
		update: z.union([
			z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputObjectSchema),
			z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => AuthUserCreateWithoutAuth_sessionInputObjectSchema),
			z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema)
		])
	})
	.strict()

export const AuthUserUpsertWithoutAuth_sessionInputObjectSchema = Schema
