import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'
import { BigIntNullableWithAggregatesFilterObjectSchema } from './BigIntNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthKeyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthKeyScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthKeyScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthKeyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthKeyScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		hashed_password: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		primary_key: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		expires: z
			.union([z.lazy(() => BigIntNullableWithAggregatesFilterObjectSchema), z.bigint()])
			.optional()
			.nullable()
	})
	.strict()

export const AuthKeyScalarWhereWithAggregatesInputObjectSchema = Schema
