import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpdateWithoutAuth_sessionInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		email: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema).optional()
	})
	.strict()

export const AuthUserUpdateWithoutAuth_sessionInputObjectSchema = Schema
