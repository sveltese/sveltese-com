import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.personal_access_tokensCreateManyInput> = z
	.object({
		id: z.bigint().optional(),
		tokenable_type: z.string(),
		tokenable_id: z.bigint(),
		name: z.string(),
		token: z.string(),
		abilities: z.string().optional().nullable(),
		last_used_at: z.date().optional().nullable(),
		expires_at: z.date().optional().nullable(),
		created_at: z.date().optional().nullable(),
		updated_at: z.date().optional().nullable()
	})
	.strict();

export const personal_access_tokensCreateManyInputObjectSchema = Schema;
