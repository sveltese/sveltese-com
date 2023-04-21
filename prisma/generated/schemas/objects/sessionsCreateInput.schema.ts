import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateInput> = z
	.object({
		id: z.string(),
		user_id: z.bigint().optional().nullable(),
		ip_address: z.string().optional().nullable(),
		user_agent: z.string().optional().nullable(),
		payload: z.string(),
		last_activity: z.number()
	})
	.strict();

export const sessionsCreateInputObjectSchema = Schema;
