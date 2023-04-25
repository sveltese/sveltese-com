import { z } from 'zod'
import { team_invitationsScalarWhereInputObjectSchema } from './team_invitationsScalarWhereInput.schema'
import { team_invitationsUpdateManyMutationInputObjectSchema } from './team_invitationsUpdateManyMutationInput.schema'
import { team_invitationsUncheckedUpdateManyWithoutTeam_invitationsInputObjectSchema } from './team_invitationsUncheckedUpdateManyWithoutTeam_invitationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsUpdateManyWithWhereWithoutTeamsInput> = z
	.object({
		where: z.lazy(() => team_invitationsScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => team_invitationsUpdateManyMutationInputObjectSchema),
			z.lazy(() => team_invitationsUncheckedUpdateManyWithoutTeam_invitationsInputObjectSchema)
		])
	})
	.strict()

export const team_invitationsUpdateManyWithWhereWithoutTeamsInputObjectSchema = Schema
