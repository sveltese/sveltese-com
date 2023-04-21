import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsAvgOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		team_id: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const team_invitationsAvgOrderByAggregateInputObjectSchema = Schema;
