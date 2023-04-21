import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.teamsWhereUniqueInput> = z
	.object({
		id: z.bigint().optional()
	})
	.strict();

export const teamsWhereUniqueInputObjectSchema = Schema;
