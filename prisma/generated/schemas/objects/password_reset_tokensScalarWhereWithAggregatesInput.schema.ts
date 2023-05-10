import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => password_reset_tokensScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => password_reset_tokensScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => password_reset_tokensScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => password_reset_tokensScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => password_reset_tokensScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict()

export const password_reset_tokensScalarWhereWithAggregatesInputObjectSchema = Schema
