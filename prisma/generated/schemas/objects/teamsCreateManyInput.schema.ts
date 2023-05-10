import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsCreateManyInput> = z
	.object({
		id: z.bigint().optional(),
		user_id: z.bigint(),
		name: z.string(),
		personal_team: z.boolean(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable()
	})
	.strict()

export const teamsCreateManyInputObjectSchema = Schema
