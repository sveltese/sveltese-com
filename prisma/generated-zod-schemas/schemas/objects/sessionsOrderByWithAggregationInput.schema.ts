import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { sessionsCountOrderByAggregateInputObjectSchema } from './sessionsCountOrderByAggregateInput.schema'
import { sessionsAvgOrderByAggregateInputObjectSchema } from './sessionsAvgOrderByAggregateInput.schema'
import { sessionsMaxOrderByAggregateInputObjectSchema } from './sessionsMaxOrderByAggregateInput.schema'
import { sessionsMinOrderByAggregateInputObjectSchema } from './sessionsMinOrderByAggregateInput.schema'
import { sessionsSumOrderByAggregateInputObjectSchema } from './sessionsSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		ip_address: z.lazy(() => SortOrderSchema).optional(),
		user_agent: z.lazy(() => SortOrderSchema).optional(),
		payload: z.lazy(() => SortOrderSchema).optional(),
		last_activity: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => sessionsCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => sessionsAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => sessionsMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => sessionsMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => sessionsSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const sessionsOrderByWithAggregationInputObjectSchema = Schema
