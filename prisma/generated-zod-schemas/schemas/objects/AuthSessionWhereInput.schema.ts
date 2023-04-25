import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BigIntFilterObjectSchema } from './BigIntFilter.schema'
import { AuthUserRelationFilterObjectSchema } from './AuthUserRelationFilter.schema'
import { AuthUserWhereInputObjectSchema } from './AuthUserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthSessionWhereInputObjectSchema),
				z.lazy(() => AuthSessionWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthSessionWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthSessionWhereInputObjectSchema),
				z.lazy(() => AuthSessionWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		active_expires: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		idle_expires: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		auth_user: z
			.union([
				z.lazy(() => AuthUserRelationFilterObjectSchema),
				z.lazy(() => AuthUserWhereInputObjectSchema)
			])
			.optional()
	})
	.strict()

export const AuthSessionWhereInputObjectSchema = Schema
