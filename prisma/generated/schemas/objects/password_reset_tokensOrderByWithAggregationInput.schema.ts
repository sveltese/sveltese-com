import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { password_reset_tokensCountOrderByAggregateInputObjectSchema } from './password_reset_tokensCountOrderByAggregateInput.schema'
import { password_reset_tokensMaxOrderByAggregateInputObjectSchema } from './password_reset_tokensMaxOrderByAggregateInput.schema'
import { password_reset_tokensMinOrderByAggregateInputObjectSchema } from './password_reset_tokensMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensOrderByWithAggregationInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => password_reset_tokensCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => password_reset_tokensMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => password_reset_tokensMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict()

export const password_reset_tokensOrderByWithAggregationInputObjectSchema = Schema
