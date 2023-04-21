import { z } from 'zod';
import { team_invitationsWhereUniqueInputObjectSchema } from './team_invitationsWhereUniqueInput.schema';
import { team_invitationsUpdateWithoutTeamsInputObjectSchema } from './team_invitationsUpdateWithoutTeamsInput.schema';
import { team_invitationsUncheckedUpdateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedUpdateWithoutTeamsInput.schema';
import { team_invitationsCreateWithoutTeamsInputObjectSchema } from './team_invitationsCreateWithoutTeamsInput.schema';
import { team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedCreateWithoutTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsUpsertWithWhereUniqueWithoutTeamsInput> = z
	.object({
		where: z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => team_invitationsUpdateWithoutTeamsInputObjectSchema),
			z.lazy(() => team_invitationsUncheckedUpdateWithoutTeamsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => team_invitationsCreateWithoutTeamsInputObjectSchema),
			z.lazy(() => team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema)
		])
	})
	.strict();

export const team_invitationsUpsertWithWhereUniqueWithoutTeamsInputObjectSchema = Schema;
