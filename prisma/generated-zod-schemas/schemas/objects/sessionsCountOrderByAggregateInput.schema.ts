import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsCountOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		ip_address: z.lazy(() => SortOrderSchema).optional(),
		user_agent: z.lazy(() => SortOrderSchema).optional(),
		payload: z.lazy(() => SortOrderSchema).optional(),
		last_activity: z.lazy(() => SortOrderSchema).optional()
	})
	.strict()

export const sessionsCountOrderByAggregateInputObjectSchema = Schema
