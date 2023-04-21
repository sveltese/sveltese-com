import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { usersCountOrderByAggregateInputObjectSchema } from './usersCountOrderByAggregateInput.schema';
import { usersAvgOrderByAggregateInputObjectSchema } from './usersAvgOrderByAggregateInput.schema';
import { usersMaxOrderByAggregateInputObjectSchema } from './usersMaxOrderByAggregateInput.schema';
import { usersMinOrderByAggregateInputObjectSchema } from './usersMinOrderByAggregateInput.schema';
import { usersSumOrderByAggregateInputObjectSchema } from './usersSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		email_verified_at: z.lazy(() => SortOrderSchema).optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		remember_token: z.lazy(() => SortOrderSchema).optional(),
		current_team_id: z.lazy(() => SortOrderSchema).optional(),
		profile_photo_path: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		two_factor_secret: z.lazy(() => SortOrderSchema).optional(),
		two_factor_recovery_codes: z.lazy(() => SortOrderSchema).optional(),
		two_factor_confirmed_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => usersCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => usersAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => usersMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => usersMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => usersSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const usersOrderByWithAggregationInputObjectSchema = Schema;
