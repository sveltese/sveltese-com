import { z } from 'zod';
import { BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.personal_access_tokensWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => personal_access_tokensWhereInputObjectSchema),
				z.lazy(() => personal_access_tokensWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => personal_access_tokensWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => personal_access_tokensWhereInputObjectSchema),
				z.lazy(() => personal_access_tokensWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		tokenable_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		tokenable_id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		abilities: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		last_used_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict();

export const personal_access_tokensWhereInputObjectSchema = Schema;
