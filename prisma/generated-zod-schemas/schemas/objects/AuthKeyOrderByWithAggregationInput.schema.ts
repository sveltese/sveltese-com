import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthKeyCountOrderByAggregateInputObjectSchema } from './AuthKeyCountOrderByAggregateInput.schema'
import { AuthKeyAvgOrderByAggregateInputObjectSchema } from './AuthKeyAvgOrderByAggregateInput.schema'
import { AuthKeyMaxOrderByAggregateInputObjectSchema } from './AuthKeyMaxOrderByAggregateInput.schema'
import { AuthKeyMinOrderByAggregateInputObjectSchema } from './AuthKeyMinOrderByAggregateInput.schema'
import { AuthKeySumOrderByAggregateInputObjectSchema } from './AuthKeySumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		hashed_password: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		primary_key: z.lazy(() => SortOrderSchema).optional(),
		expires: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => AuthKeyCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => AuthKeyAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => AuthKeyMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => AuthKeyMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => AuthKeySumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const AuthKeyOrderByWithAggregationInputObjectSchema = Schema
