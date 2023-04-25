import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionAvgOrderByAggregateInput> = z
	.object({
		active_expires: z.lazy(() => SortOrderSchema).optional(),
		idle_expires: z.lazy(() => SortOrderSchema).optional()
	})
	.strict()

export const AuthSessionAvgOrderByAggregateInputObjectSchema = Schema
