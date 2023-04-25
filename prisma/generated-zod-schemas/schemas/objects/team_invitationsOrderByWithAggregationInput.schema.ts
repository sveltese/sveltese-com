import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { team_invitationsCountOrderByAggregateInputObjectSchema } from './team_invitationsCountOrderByAggregateInput.schema'
import { team_invitationsAvgOrderByAggregateInputObjectSchema } from './team_invitationsAvgOrderByAggregateInput.schema'
import { team_invitationsMaxOrderByAggregateInputObjectSchema } from './team_invitationsMaxOrderByAggregateInput.schema'
import { team_invitationsMinOrderByAggregateInputObjectSchema } from './team_invitationsMinOrderByAggregateInput.schema'
import { team_invitationsSumOrderByAggregateInputObjectSchema } from './team_invitationsSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		team_id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => team_invitationsCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => team_invitationsAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => team_invitationsMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => team_invitationsMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => team_invitationsSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const team_invitationsOrderByWithAggregationInputObjectSchema = Schema
