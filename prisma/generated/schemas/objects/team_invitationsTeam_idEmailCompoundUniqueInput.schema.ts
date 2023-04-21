import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsTeam_idEmailCompoundUniqueInput> = z
	.object({
		team_id: z.bigint(),
		email: z.string()
	})
	.strict();

export const team_invitationsTeam_idEmailCompoundUniqueInputObjectSchema = Schema;
