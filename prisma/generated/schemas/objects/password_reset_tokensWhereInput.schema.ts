import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.password_reset_tokensWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => password_reset_tokensWhereInputObjectSchema),
				z.lazy(() => password_reset_tokensWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => password_reset_tokensWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => password_reset_tokensWhereInputObjectSchema),
				z.lazy(() => password_reset_tokensWhereInputObjectSchema).array()
			])
			.optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		created_at: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable()
	})
	.strict();

export const password_reset_tokensWhereInputObjectSchema = Schema;
