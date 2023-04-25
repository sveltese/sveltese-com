import { z } from 'zod'
import { teamsUpdateWithoutTeam_invitationsInputObjectSchema } from './teamsUpdateWithoutTeam_invitationsInput.schema'
import { teamsUncheckedUpdateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedUpdateWithoutTeam_invitationsInput.schema'
import { teamsCreateWithoutTeam_invitationsInputObjectSchema } from './teamsCreateWithoutTeam_invitationsInput.schema'
import { teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema } from './teamsUncheckedCreateWithoutTeam_invitationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsUpsertWithoutTeam_invitationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => teamsUpdateWithoutTeam_invitationsInputObjectSchema),
			z.lazy(() => teamsUncheckedUpdateWithoutTeam_invitationsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => teamsCreateWithoutTeam_invitationsInputObjectSchema),
			z.lazy(() => teamsUncheckedCreateWithoutTeam_invitationsInputObjectSchema)
		])
	})
	.strict()

export const teamsUpsertWithoutTeam_invitationsInputObjectSchema = Schema
