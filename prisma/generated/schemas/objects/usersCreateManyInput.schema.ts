import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateManyInput> = z
	.object({
		id: z.bigint().optional(),
		name: z.string(),
		email: z.string(),
		email_verified_at: z.date().optional().nullable(),
		password: z.string(),
		remember_token: z.string().optional().nullable(),
		current_team_id: z.bigint().optional().nullable(),
		profile_photo_path: z.string().optional().nullable(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable(),
		two_factor_secret: z.string().optional().nullable(),
		two_factor_recovery_codes: z.string().optional().nullable(),
		two_factor_confirmed_at: z.date().optional().nullable()
	})
	.strict();

export const usersCreateManyInputObjectSchema = Schema;
