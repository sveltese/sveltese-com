import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthSessionOrderByRelationAggregateInputObjectSchema } from './AuthSessionOrderByRelationAggregateInput.schema'
import { AuthKeyOrderByRelationAggregateInputObjectSchema } from './AuthKeyOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		auth_session: z.lazy(() => AuthSessionOrderByRelationAggregateInputObjectSchema).optional(),
		auth_key: z.lazy(() => AuthKeyOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict()

export const AuthUserOrderByWithRelationInputObjectSchema = Schema
