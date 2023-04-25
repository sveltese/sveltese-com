import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BigIntNullableWithAggregatesFilterObjectSchema } from './BigIntNullableWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => sessionsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => sessionsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => sessionsScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => sessionsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => sessionsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		user_id: z
			.union([z.lazy(() => BigIntNullableWithAggregatesFilterObjectSchema), z.bigint()])
			.optional()
			.nullable(),
		ip_address: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		user_agent: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		payload: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		last_activity: z
			.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
			.optional()
	})
	.strict()

export const sessionsScalarWhereWithAggregatesInputObjectSchema = Schema
