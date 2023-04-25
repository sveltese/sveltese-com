import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensMaxOrderByAggregateInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional()
	})
	.strict()

export const password_reset_tokensMaxOrderByAggregateInputObjectSchema = Schema
