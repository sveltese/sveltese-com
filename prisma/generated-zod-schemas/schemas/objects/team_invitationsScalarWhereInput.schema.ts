import { z } from 'zod'
import { BigIntFilterObjectSchema } from './BigIntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema),
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => team_invitationsScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema),
				z.lazy(() => team_invitationsScalarWhereInputObjectSchema).array()
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
			.nullable()
	})
	.strict()

export const team_invitationsScalarWhereInputObjectSchema = Schema
