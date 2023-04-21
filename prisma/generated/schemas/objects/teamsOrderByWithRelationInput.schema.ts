import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { team_invitationsOrderByRelationAggregateInputObjectSchema } from './team_invitationsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.teamsOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		personal_team: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		team_invitations: z
			.lazy(() => team_invitationsOrderByRelationAggregateInputObjectSchema)
			.optional()
	})
	.strict();

export const teamsOrderByWithRelationInputObjectSchema = Schema;
