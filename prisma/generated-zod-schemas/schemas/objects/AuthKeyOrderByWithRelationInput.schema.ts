import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthUserOrderByWithRelationInputObjectSchema } from './AuthUserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		hashed_password: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		primary_key: z.lazy(() => SortOrderSchema).optional(),
		expires: z.lazy(() => SortOrderSchema).optional(),
		auth_user: z.lazy(() => AuthUserOrderByWithRelationInputObjectSchema).optional()
	})
	.strict()

export const AuthKeyOrderByWithRelationInputObjectSchema = Schema
