import { z } from 'zod'
import { BigIntFilterObjectSchema } from './BigIntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { TeamsRelationFilterObjectSchema } from './TeamsRelationFilter.schema'
import { teamsWhereInputObjectSchema } from './teamsWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => team_invitationsWhereInputObjectSchema),
				z.lazy(() => team_invitationsWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => team_invitationsWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => team_invitationsWhereInputObjectSchema),
				z.lazy(() => team_invitationsWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		team_id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		role: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		teams: z
			.union([
				z.lazy(() => TeamsRelationFilterObjectSchema),
				z.lazy(() => teamsWhereInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const team_invitationsWhereInputObjectSchema = Schema
