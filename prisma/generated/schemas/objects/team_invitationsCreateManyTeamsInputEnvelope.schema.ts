import { z } from 'zod';
import { team_invitationsCreateManyTeamsInputObjectSchema } from './team_invitationsCreateManyTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsCreateManyTeamsInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => team_invitationsCreateManyTeamsInputObjectSchema),
			z.lazy(() => team_invitationsCreateManyTeamsInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const team_invitationsCreateManyTeamsInputEnvelopeObjectSchema = Schema;
