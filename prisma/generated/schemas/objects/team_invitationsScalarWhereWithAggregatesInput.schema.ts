import { z } from 'zod';
import { BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.team_invitationsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => team_invitationsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => team_invitationsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => team_invitationsScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => team_invitationsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => team_invitationsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		team_id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
		email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
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

export const team_invitationsScalarWhereWithAggregatesInputObjectSchema = Schema;
