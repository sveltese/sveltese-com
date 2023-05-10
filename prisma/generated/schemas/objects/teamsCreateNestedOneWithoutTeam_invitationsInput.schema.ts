import { z } from 'zod'
import { teamsCreateWithoutTeam_invitationsInputObjectSchema } from './teamsCreateWithoutTeam_invitationsInput.schema'
import { teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedCreateWithoutTeam_invitationsInput.schema'
import { teamsCreateOrConnectWithoutTeam_invitationsInputObjectSchema } from './teamsCreateOrConnectWithoutTeam_invitationsInput.schema'
import { teamsWhereUniqueInputObjectSchema } from './teamsWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsCreateNestedOneWithoutTeam_invitationsInput> = z
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
		connect: z.lazy(() => teamsWhereUniqueInputObjectSchema).optional()
	})
	.strict()

export const teamsCreateNestedOneWithoutTeam_invitationsInputObjectSchema = Schema
