import { z } from 'zod'
import { AuthUserUpdateWithoutAuth_keyInputObjectSchema } from './AuthUserUpdateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedUpdateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedUpdateWithoutAuth_keyInput.schema'
import { AuthUserCreateWithoutAuth_keyInputObjectSchema } from './AuthUserCreateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_keyInput> = z
	.object({
		update: z.union([
			z.lazy(() => AuthUserUpdateWithoutAuth_keyInputObjectSchema),
			z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => AuthUserCreateWithoutAuth_keyInputObjectSchema),
			z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema)
		])
	})
	.strict()

export const AuthUserUpsertWithoutAuth_keyInputObjectSchema = Schema
