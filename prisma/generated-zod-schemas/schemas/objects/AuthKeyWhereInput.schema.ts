import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema'
import { AuthUserRelationFilterObjectSchema } from './AuthUserRelationFilter.schema'
import { AuthUserWhereInputObjectSchema } from './AuthUserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthKeyWhereInputObjectSchema),
				z.lazy(() => AuthKeyWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthKeyWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthKeyWhereInputObjectSchema),
				z.lazy(() => AuthKeyWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		hashed_password: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		primary_key: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		expires: z
			.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()])
			.optional()
			.nullable(),
		auth_user: z
			.union([
				z.lazy(() => AuthUserRelationFilterObjectSchema),
				z.lazy(() => AuthUserWhereInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const AuthKeyWhereInputObjectSchema = Schema
