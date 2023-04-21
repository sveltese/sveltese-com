import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { teamsOrderByWithRelationInputObjectSchema } from './teamsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		team_id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		teams: z.lazy(() => teamsOrderByWithRelationInputObjectSchema).optional()
	})
	.strict();

export const team_invitationsOrderByWithRelationInputObjectSchema = Schema;
