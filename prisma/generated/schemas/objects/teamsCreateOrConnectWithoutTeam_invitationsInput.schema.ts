import { z } from 'zod';
import { teamsWhereUniqueInputObjectSchema } from './teamsWhereUniqueInput.schema';
import { teamsCreateWithoutTeam_invitationsInputObjectSchema } from './teamsCreateWithoutTeam_invitationsInput.schema';
import { teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedCreateWithoutTeam_invitationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.teamsCreateOrConnectWithoutTeam_invitationsInput> = z
	.object({
		where: z.lazy(() => teamsWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => teamsCreateWithoutTeam_invitationsInputObjectSchema),
			z.lazy(() => teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema)
		])
	})
	.strict();

export const teamsCreateOrConnectWithoutTeam_invitationsInputObjectSchema = Schema;
