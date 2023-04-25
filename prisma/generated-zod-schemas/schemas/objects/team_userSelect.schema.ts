import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_userSelect> = z
	.object({
		id: z.boolean().optional(),
		team_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		role: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional()
	})
	.strict()

export const team_userSelectObjectSchema = Schema
