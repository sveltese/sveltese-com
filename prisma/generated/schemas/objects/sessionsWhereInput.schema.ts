import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BigIntNullableFilterObjectSchema } from './BigIntNullableFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => sessionsWhereInputObjectSchema),
				z.lazy(() => sessionsWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => sessionsWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => sessionsWhereInputObjectSchema),
				z.lazy(() => sessionsWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		user_id: z
			.union([z.lazy(() => BigIntNullableFilterObjectSchema), z.bigint()])
			.optional()
			.nullable(),
		ip_address: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		user_agent: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		payload: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		last_activity: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional()
	})
	.strict()

export const sessionsWhereInputObjectSchema = Schema
