import { z } from 'zod';
import { BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_userScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => team_userScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => team_userScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => team_userScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => team_userScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => team_userScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		team_id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		user_id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		role: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
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

export const team_userScalarWhereWithAggregatesInputObjectSchema = Schema;
