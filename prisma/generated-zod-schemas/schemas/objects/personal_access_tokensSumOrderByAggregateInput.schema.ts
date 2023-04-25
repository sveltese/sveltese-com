import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.personal_access_tokensSumOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		tokenable_id: z.lazy(() => SortOrderSchema).optional()
	})
	.strict()

export const personal_access_tokensSumOrderByAggregateInputObjectSchema = Schema
