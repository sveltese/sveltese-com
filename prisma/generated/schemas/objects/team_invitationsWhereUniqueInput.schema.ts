import { z } from 'zod'
import { team_invitationsTeam_idEmailCompoundUniqueInputObjectSchema } from './team_invitationsTeam_idEmailCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsWhereUniqueInput> = z
	.object({
		id: z.bigint().optional(),
		team_id_email: z
			.lazy(() => team_invitationsTeam_idEmailCompoundUniqueInputObjectSchema)
			.optional()
	})
	.strict()

export const team_invitationsWhereUniqueInputObjectSchema = Schema
