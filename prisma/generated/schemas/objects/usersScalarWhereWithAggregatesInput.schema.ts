import { z } from 'zod';
import { BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BigIntNullableWithAggregatesFilterObjectSchema } from './BigIntNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => usersScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => usersScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => usersScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => usersScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => usersScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		email_verified_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		password: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		remember_token: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		current_team_id: z
			.union([z.lazy(() => BigIntNullableWithAggregatesFilterObjectSchema), z.bigint()])
			.optional()
			.nullable(),
		profile_photo_path: z
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
			.nullable(),
		two_factor_secret: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		two_factor_recovery_codes: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		two_factor_confirmed_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict();

export const usersScalarWhereWithAggregatesInputObjectSchema = Schema;
