import { z } from 'zod';
import { team_invitationsCreateWithoutTeamsInputObjectSchema } from './team_invitationsCreateWithoutTeamsInput.schema';
import { team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedCreateWithoutTeamsInput.schema';
import { team_invitationsCreateOrConnectWithoutTeamsInputObjectSchema } from './team_invitationsCreateOrConnectWithoutTeamsInput.schema';
import { team_invitationsUpsertWithWhereUniqueWithoutTeamsInputObjectSchema } from './team_invitationsUpsertWithWhereUniqueWithoutTeamsInput.schema';
import { team_invitationsCreateManyTeamsInputEnvelopeObjectSchema } from './team_invitationsCreateManyTeamsInputEnvelope.schema';
import { team_invitationsWhereUniqueInputObjectSchema } from './team_invitationsWhereUniqueInput.schema';
import { team_invitationsUpdateWithWhereUniqueWithoutTeamsInputObjectSchema } from './team_invitationsUpdateWithWhereUniqueWithoutTeamsInput.schema';
import { team_invitationsUpdateManyWithWhereWithoutTeamsInputObjectSchema } from './team_invitationsUpdateManyWithWhereWithoutTeamsInput.schema';
import { team_invitationsScalarWhereInputObjectSchema } from './team_invitationsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsUncheckedUpdateManyWithoutTeamsNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => team_invitationsUpsertWithWhereUniqueWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsUpsertWithWhereUniqueWithoutTeamsInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => team_invitationsCreateManyTeamsInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
				z.lazy(() => team_invitationsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => team_invitationsUpdateWithWhereUniqueWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsUpdateWithWhereUniqueWithoutTeamsInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => team_invitationsUpdateManyWithWhereWithoutTeamsInputObjectSchema),
				z.lazy(() => team_invitationsUpdateManyWithWhereWithoutTeamsInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema),
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const team_invitationsUncheckedUpdateManyWithoutTeamsNestedInputObjectSchema = Schema;
