import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Personal_access_tokensSumAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		tokenable_id: z.literal(true).optional()
	})
	.strict()

export const Personal_access_tokensSumAggregateInputObjectSchema = Schema