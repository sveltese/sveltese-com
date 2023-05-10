import { z } from 'zod'
import { team_invitationsUncheckedCreateNestedManyWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedCreateNestedManyWithoutTeamsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsUncheckedCreateInput> = z
	.object({
		id: z.bigint().optional(),
		user_id: z.bigint(),
		name: z.string(),
		personal_team: z.boolean(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable(),
		team_invitations: z
			.lazy(() => team_invitationsUncheckedCreateNestedManyWithoutTeamsInputObjectSchema)
			.optional()
	})
	.strict()

export const teamsUncheckedCreateInputObjectSchema = Schema
