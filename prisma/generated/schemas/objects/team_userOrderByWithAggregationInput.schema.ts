import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { team_userCountOrderByAggregateInputObjectSchema } from './team_userCountOrderByAggregateInput.schema';
import { team_userAvgOrderByAggregateInputObjectSchema } from './team_userAvgOrderByAggregateInput.schema';
import { team_userMaxOrderByAggregateInputObjectSchema } from './team_userMaxOrderByAggregateInput.schema';
import { team_userMinOrderByAggregateInputObjectSchema } from './team_userMinOrderByAggregateInput.schema';
import { team_userSumOrderByAggregateInputObjectSchema } from './team_userSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_userOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		team_id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => team_userCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => team_userAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => team_userMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => team_userMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => team_userSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const team_userOrderByWithAggregationInputObjectSchema = Schema;
