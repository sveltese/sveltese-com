import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsCreateManyInput> = z
	.object({
		id: z.bigint().optional(),
		team_id: z.bigint(),
		email: z.string(),
		role: z.string().optional().nullable(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable()
	})
	.strict()

export const team_invitationsCreateManyInputObjectSchema = Schema
