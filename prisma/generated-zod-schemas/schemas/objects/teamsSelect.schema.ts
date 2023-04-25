import { z } from 'zod'
import { Team_invitationsFindManySchema } from '../findManyteam_invitations.schema'
import { teamsCountOutputTypeArgsObjectSchema } from './teamsCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsSelect> = z
	.object({
		id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		name: z.boolean().optional(),
		personal_team: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		team_invitations: z
			.union([z.boolean(), z.lazy(() => Team_invitationsFindManySchema)])
			.optional(),
		_count: z.union([z.boolean(), z.lazy(() => teamsCountOutputTypeArgsObjectSchema)]).optional()
	})
	.strict()

export const teamsSelectObjectSchema = Schema
