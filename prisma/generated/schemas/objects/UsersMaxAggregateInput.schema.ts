import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsersMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		email: z.literal(true).optional(),
		email_verified_at: z.literal(true).optional(),
		password: z.literal(true).optional(),
		remember_token: z.literal(true).optional(),
		current_team_id: z.literal(true).optional(),
		profile_photo_path: z.literal(true).optional(),
		created_at: z.literal(true).optional(),
		updated_at: z.literal(true).optional(),
		two_factor_secret: z.literal(true).optional(),
		two_factor_recovery_codes: z.literal(true).optional(),
		two_factor_confirmed_at: z.literal(true).optional()
	})
	.strict();

export const UsersMaxAggregateInputObjectSchema = Schema;
