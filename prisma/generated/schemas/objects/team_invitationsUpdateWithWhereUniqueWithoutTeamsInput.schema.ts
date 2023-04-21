import { z } from 'zod';
import { team_invitationsWhereUniqueInputObjectSchema } from './team_invitationsWhereUniqueInput.schema';
import { team_invitationsUpdateWithoutTeamsInputObjectSchema } from './team_invitationsUpdateWithoutTeamsInput.schema';
import { team_invitationsUncheckedUpdateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedUpdateWithoutTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsUpdateWithWhereUniqueWithoutTeamsInput> = z
	.object({
		where: z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => team_invitationsUpdateWithoutTeamsInputObjectSchema),
			z.lazy(() => team_invitationsUncheckedUpdateWithoutTeamsInputObjectSchema)
		])
	})
	.strict();

export const team_invitationsUpdateWithWhereUniqueWithoutTeamsInputObjectSchema = Schema;
