import { z } from 'zod'
import { AuthUserWhereInputObjectSchema } from './AuthUserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserRelationFilter> = z
	.object({
		is: z.lazy(() => AuthUserWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => AuthUserWhereInputObjectSchema).optional()
	})
	.strict()

export const AuthUserRelationFilterObjectSchema = Schema
