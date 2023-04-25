import { z } from 'zod'
import { AuthSessionWhereInputObjectSchema } from './AuthSessionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionListRelationFilter> = z
	.object({
		every: z.lazy(() => AuthSessionWhereInputObjectSchema).optional(),
		some: z.lazy(() => AuthSessionWhereInputObjectSchema).optional(),
		none: z.lazy(() => AuthSessionWhereInputObjectSchema).optional()
	})
	.strict()

export const AuthSessionListRelationFilterObjectSchema = Schema
