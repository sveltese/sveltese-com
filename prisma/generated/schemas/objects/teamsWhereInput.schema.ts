import { z } from 'zod';
import { BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Team_invitationsListRelationFilterObjectSchema } from './Team_invitationsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.teamsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => teamsWhereInputObjectSchema),
				z.lazy(() => teamsWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => teamsWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => teamsWhereInputObjectSchema),
				z.lazy(() => teamsWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		user_id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		personal_team: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		team_invitations: z.lazy(() => Team_invitationsListRelationFilterObjectSchema).optional()
	})
	.strict();

export const teamsWhereInputObjectSchema = Schema;
