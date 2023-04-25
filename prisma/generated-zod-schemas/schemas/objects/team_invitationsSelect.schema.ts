import { z } from 'zod'
import { teamsArgsObjectSchema } from './teamsArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsSelect> = z
	.object({
		id: z.boolean().optional(),
		team_id: z.boolean().optional(),
		email: z.boolean().optional(),
		role: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		teams: z.union([z.boolean(), z.lazy(() => teamsArgsObjectSchema)]).optional()
	})
	.strict()

export const team_invitationsSelectObjectSchema = Schema
