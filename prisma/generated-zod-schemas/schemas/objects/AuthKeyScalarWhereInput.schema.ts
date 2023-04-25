import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema),
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthKeyScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema),
				z.lazy(() => AuthKeyScalarWhereInputObjectSchema).array()
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
			.nullable()
	})
	.strict()

export const AuthKeyScalarWhereInputObjectSchema = Schema
