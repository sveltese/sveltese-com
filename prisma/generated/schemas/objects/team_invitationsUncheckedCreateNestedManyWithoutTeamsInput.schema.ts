import { z } from 'zod';
import { team_invitationsCreateWithoutTeamsInputObjectSchema } from './team_invitationsCreateWithoutTeamsInput.schema';
import { team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedCreateWithoutTeamsInput.schema';
import { team_invitationsCreateOrConnectWithoutTeamsInputObjectSchema } from './team_invitationsCreateOrConnectWithoutTeamsInput.schema';
import { team_invitationsCreateManyTeamsInputEnvelopeObjectSchema } from './team_invitationsCreateManyTeamsInputEnvelope.schema';
import { team_invitationsWhereUniqueInputObjectSchema } from './team_invitationsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsUncheckedCreateNestedManyWithoutTeamsInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => team_invitationsCreateWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsCreateWithoutTeamsInputObjectSchema).array(),
				z.lazy(() => team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => team_invitationsCreateOrConnectWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsCreateOrConnectWithoutTeamsInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => team_invitationsCreateManyTeamsInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const team_invitationsUncheckedCreateNestedManyWithoutTeamsInputObjectSchema = Schema;
