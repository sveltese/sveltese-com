import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutAuth_sessionInput> = z
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
		auth_key: z
			.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserUncheckedUpdateWithoutAuth_sessionInputObjectSchema = Schema
