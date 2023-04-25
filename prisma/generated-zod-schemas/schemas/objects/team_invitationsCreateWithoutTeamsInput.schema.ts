import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsCreateWithoutTeamsInput> = z
	.object({
		id: z.bigint().optional(),
		email: z.string(),
		role: z.string().optional().nullable(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable()
	})
	.strict()

export const team_invitationsCreateWithoutTeamsInputObjectSchema = Schema
