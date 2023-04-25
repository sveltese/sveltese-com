import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyAvgOrderByAggregateInput> = z
	.object({
		expires: z.lazy(() => SortOrderSchema).optional()
	})
	.strict()

export const AuthKeyAvgOrderByAggregateInputObjectSchema = Schema
