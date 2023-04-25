import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.usersSelect> = z
	.object({
		id: z.boolean().optional(),
		name: z.boolean().optional(),
		email: z.boolean().optional(),
		email_verified_at: z.boolean().optional(),
		password: z.boolean().optional(),
		remember_token: z.boolean().optional(),
		current_team_id: z.boolean().optional(),
		profile_photo_path: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		two_factor_secret: z.boolean().optional(),
		two_factor_recovery_codes: z.boolean().optional(),
		two_factor_confirmed_at: z.boolean().optional()
	})
	.strict()

export const usersSelectObjectSchema = Schema
