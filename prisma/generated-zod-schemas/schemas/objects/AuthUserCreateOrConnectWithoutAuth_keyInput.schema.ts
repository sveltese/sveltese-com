import { z } from 'zod'
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema'
import { AuthUserCreateWithoutAuth_keyInputObjectSchema } from './AuthUserCreateWithoutAuth_keyInput.schema'
import { AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_keyInput> = z
	.object({
		where: z.lazy(() => AuthUserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => AuthUserCreateWithoutAuth_keyInputObjectSchema),
			z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema)
		])
	})
	.strict()

export const AuthUserCreateOrConnectWithoutAuth_keyInputObjectSchema = Schema
