import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCountOrderByAggregateInput> = z
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
		two_factor_confirmed_at: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const usersCountOrderByAggregateInputObjectSchema = Schema;
