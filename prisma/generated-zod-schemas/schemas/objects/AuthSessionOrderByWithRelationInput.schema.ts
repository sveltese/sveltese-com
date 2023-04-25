import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthUserOrderByWithRelationInputObjectSchema } from './AuthUserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user_id: z.lazy(() => SortOrderSchema).optional(),
		active_expires: z.lazy(() => SortOrderSchema).optional(),
		idle_expires: z.lazy(() => SortOrderSchema).optional(),
		auth_user: z.lazy(() => AuthUserOrderByWithRelationInputObjectSchema).optional()
	})
	.strict()

export const AuthSessionOrderByWithRelationInputObjectSchema = Schema
