import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthUserCountOrderByAggregateInputObjectSchema } from './AuthUserCountOrderByAggregateInput.schema'
import { AuthUserMaxOrderByAggregateInputObjectSchema } from './AuthUserMaxOrderByAggregateInput.schema'
import { AuthUserMinOrderByAggregateInputObjectSchema } from './AuthUserMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => AuthUserCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => AuthUserMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => AuthUserMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const AuthUserOrderByWithAggregationInputObjectSchema = Schema
