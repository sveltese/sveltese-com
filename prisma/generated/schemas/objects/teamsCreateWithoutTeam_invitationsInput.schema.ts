import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsCreateWithoutTeam_invitationsInput> = z
	.object({
		id: z.bigint().optional(),
		user_id: z.bigint(),
		name: z.string(),
		personal_team: z.boolean(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable()
	})
	.strict()

export const teamsCreateWithoutTeam_invitationsInputObjectSchema = Schema
