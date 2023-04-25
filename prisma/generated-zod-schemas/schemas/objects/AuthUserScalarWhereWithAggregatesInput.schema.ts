import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthUserScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthUserScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthUserScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthUserScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => AuthUserScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
	})
	.strict()

export const AuthUserScalarWhereWithAggregatesInputObjectSchema = Schema
