import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { AuthSessionListRelationFilterObjectSchema } from './AuthSessionListRelationFilter.schema'
import { AuthKeyListRelationFilterObjectSchema } from './AuthKeyListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AuthUserWhereInputObjectSchema),
				z.lazy(() => AuthUserWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => AuthUserWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AuthUserWhereInputObjectSchema),
				z.lazy(() => AuthUserWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		auth_session: z.lazy(() => AuthSessionListRelationFilterObjectSchema).optional(),
		auth_key: z.lazy(() => AuthKeyListRelationFilterObjectSchema).optional()
	})
	.strict()

export const AuthUserWhereInputObjectSchema = Schema
