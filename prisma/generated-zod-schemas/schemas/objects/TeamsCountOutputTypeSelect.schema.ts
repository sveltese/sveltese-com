import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TeamsCountOutputTypeSelect> = z
	.object({
		team_invitations: z.boolean().optional()
	})
	.strict()

export const TeamsCountOutputTypeSelectObjectSchema = Schema
