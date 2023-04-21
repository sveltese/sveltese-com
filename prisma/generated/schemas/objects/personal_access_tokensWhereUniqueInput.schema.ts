import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.personal_access_tokensWhereUniqueInput> = z
	.object({
		id: z.bigint().optional(),
		token: z.string().optional()
	})
	.strict();

export const personal_access_tokensWhereUniqueInputObjectSchema = Schema;
