import { z } from 'zod';
import { BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.personal_access_tokensScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => personal_access_tokensScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => personal_access_tokensScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => personal_access_tokensScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => personal_access_tokensScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => personal_access_tokensScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		tokenable_type: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		tokenable_id: z
			.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()])
			.optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		abilities: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		last_used_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict();

export const personal_access_tokensScalarWhereWithAggregatesInputObjectSchema = Schema;
