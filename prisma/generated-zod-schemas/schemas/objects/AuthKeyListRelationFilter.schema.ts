import { z } from 'zod'
import { AuthKeyWhereInputObjectSchema } from './AuthKeyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyListRelationFilter> = z
	.object({
		every: z.lazy(() => AuthKeyWhereInputObjectSchema).optional(),
		some: z.lazy(() => AuthKeyWhereInputObjectSchema).optional(),
		none: z.lazy(() => AuthKeyWhereInputObjectSchema).optional()
	})
	.strict()

export const AuthKeyListRelationFilterObjectSchema = Schema
