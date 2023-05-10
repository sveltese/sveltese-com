import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { teamsCountOrderByAggregateInputObjectSchema } from './teamsCountOrderByAggregateInput.schema'
import { teamsAvgOrderByAggregateInputObjectSchema } from './teamsAvgOrderByAggregateInput.schema'
import { teamsMaxOrderByAggregateInputObjectSchema } from './teamsMaxOrderByAggregateInput.schema'
import { teamsMinOrderByAggregateInputObjectSchema } from './teamsMinOrderByAggregateInput.schema'
import { teamsSumOrderByAggregateInputObjectSchema } from './teamsSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		personal_team: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => teamsCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => teamsAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => teamsMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => teamsMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => teamsSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const teamsOrderByWithAggregationInputObjectSchema = Schema
