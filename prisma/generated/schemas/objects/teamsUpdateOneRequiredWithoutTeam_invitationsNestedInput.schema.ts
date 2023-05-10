import { z } from 'zod'
import { teamsCreateWithoutTeam_invitationsInputObjectSchema } from './teamsCreateWithoutTeam_invitationsInput.schema'
import { teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedCreateWithoutTeam_invitationsInput.schema'
import { teamsCreateOrConnectWithoutTeam_invitationsInputObjectSchema } from './teamsCreateOrConnectWithoutTeam_invitationsInput.schema'
import { teamsUpsertWithoutTeam_invitationsInputObjectSchema } from './teamsUpsertWithoutTeam_invitationsInput.schema'
import { teamsWhereUniqueInputObjectSchema } from './teamsWhereUniqueInput.schema'
import { teamsUpdateWithoutTeam_invitationsInputObjectSchema } from './teamsUpdateWithoutTeam_invitationsInput.schema'
import { teamsUncheckedUpdateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedUpdateWithoutTeam_invitationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsUpdateOneRequiredWithoutTeam_invitationsNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => teamsCreateWithoutTeam_invitationsInputObjectSchema),
				z.lazy(() => teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => teamsCreateOrConnectWithoutTeam_invitationsInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => teamsUpsertWithoutTeam_invitationsInputObjectSchema).optional(),
		connect: z.lazy(() => teamsWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => teamsUpdateWithoutTeam_invitationsInputObjectSchema),
				z.lazy(() => teamsUncheckedUpdateWithoutTeam_invitationsInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const teamsUpdateOneRequiredWithoutTeam_invitationsNestedInputObjectSchema = Schema
