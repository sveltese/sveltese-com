import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { personal_access_tokensCountOrderByAggregateInputObjectSchema } from './personal_access_tokensCountOrderByAggregateInput.schema'
import { personal_access_tokensAvgOrderByAggregateInputObjectSchema } from './personal_access_tokensAvgOrderByAggregateInput.schema'
import { personal_access_tokensMaxOrderByAggregateInputObjectSchema } from './personal_access_tokensMaxOrderByAggregateInput.schema'
import { personal_access_tokensMinOrderByAggregateInputObjectSchema } from './personal_access_tokensMinOrderByAggregateInput.schema'
import { personal_access_tokensSumOrderByAggregateInputObjectSchema } from './personal_access_tokensSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.personal_access_tokensOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		tokenable_type: z.lazy(() => SortOrderSchema).optional(),
		tokenable_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		abilities: z.lazy(() => SortOrderSchema).optional(),
		last_used_at: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => personal_access_tokensCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => personal_access_tokensAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => personal_access_tokensMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => personal_access_tokensMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => personal_access_tokensSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const personal_access_tokensOrderByWithAggregationInputObjectSchema = Schema
