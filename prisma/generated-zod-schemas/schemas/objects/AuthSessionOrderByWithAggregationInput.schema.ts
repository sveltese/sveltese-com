import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthSessionCountOrderByAggregateInputObjectSchema } from './AuthSessionCountOrderByAggregateInput.schema'
import { AuthSessionAvgOrderByAggregateInputObjectSchema } from './AuthSessionAvgOrderByAggregateInput.schema'
import { AuthSessionMaxOrderByAggregateInputObjectSchema } from './AuthSessionMaxOrderByAggregateInput.schema'
import { AuthSessionMinOrderByAggregateInputObjectSchema } from './AuthSessionMinOrderByAggregateInput.schema'
import { AuthSessionSumOrderByAggregateInputObjectSchema } from './AuthSessionSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		active_expires: z.lazy(() => SortOrderSchema).optional(),
		idle_expires: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => AuthSessionCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => AuthSessionAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => AuthSessionMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => AuthSessionMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => AuthSessionSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const AuthSessionOrderByWithAggregationInputObjectSchema = Schema
