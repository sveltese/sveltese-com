import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthSessionScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthSessionScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthSessionScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthSessionScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthSessionScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		active_expires: z
			.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()])
			.optional(),
		idle_expires: z
			.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()])
			.optional()
	})
	.strict()

export const AuthSessionScalarWhereWithAggregatesInputObjectSchema = Schema
