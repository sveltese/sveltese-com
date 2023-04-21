import { z } from 'zod';
import { teamsCreateNestedOneWithoutTeam_invitationsInputObjectSchema } from './teamsCreateNestedOneWithoutTeam_invitationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsCreateInput> = z
	.object({
		id: z.bigint().optional(),
		email: z.string(),
		role: z.string().optional().nullable(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable(),
		teams: z.lazy(() => teamsCreateNestedOneWithoutTeam_invitationsInputObjectSchema)
	})
	.strict();

export const team_invitationsCreateInputObjectSchema = Schema;
