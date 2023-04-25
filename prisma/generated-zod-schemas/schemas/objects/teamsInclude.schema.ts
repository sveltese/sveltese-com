import { z } from 'zod'
import { Team_invitationsFindManySchema } from '../findManyteam_invitations.schema'
import { teamsCountOutputTypeArgsObjectSchema } from './teamsCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsInclude> = z
	.object({
		team_invitations: z
			.union([z.boolean(), z.lazy(() => Team_invitationsFindManySchema)])
			.optional(),
		_count: z.union([z.boolean(), z.lazy(() => teamsCountOutputTypeArgsObjectSchema)]).optional()
	})
	.strict()

export const teamsIncludeObjectSchema = Schema
