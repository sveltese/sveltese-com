import { z } from 'zod'
import { teamsWhereInputObjectSchema } from './teamsWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TeamsRelationFilter> = z
	.object({
		is: z.lazy(() => teamsWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => teamsWhereInputObjectSchema).optional()
	})
	.strict()

export const TeamsRelationFilterObjectSchema = Schema
