import { z } from 'zod'
import { teamsArgsObjectSchema } from './teamsArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsInclude> = z
	.object({
		teams: z.union([z.boolean(), z.lazy(() => teamsArgsObjectSchema)]).optional()
	})
	.strict()

export const team_invitationsIncludeObjectSchema = Schema
