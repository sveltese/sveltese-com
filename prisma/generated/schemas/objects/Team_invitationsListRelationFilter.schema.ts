import { z } from 'zod';
import { team_invitationsWhereInputObjectSchema } from './team_invitationsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Team_invitationsListRelationFilter> = z
	.object({
		every: z.lazy(() => team_invitationsWhereInputObjectSchema).optional(),
		some: z.lazy(() => team_invitationsWhereInputObjectSchema).optional(),
		none: z.lazy(() => team_invitationsWhereInputObjectSchema).optional()
	})
	.strict();

export const Team_invitationsListRelationFilterObjectSchema = Schema;
