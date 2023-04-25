import { z } from 'zod'
import { BigIntFilterObjectSchema } from './BigIntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.usersWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => usersWhereInputObjectSchema),
				z.lazy(() => usersWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => usersWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => usersWhereInputObjectSchema),
				z.lazy(() => usersWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email_verified_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		remember_token: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		current_team_id: z
			.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()])
			.optional()
			.nullable(),
		profile_photo_path: z
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
		two_factor_secret: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		two_factor_recovery_codes: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		two_factor_confirmed_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict()

export const usersWhereInputObjectSchema = Schema
