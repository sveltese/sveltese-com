import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInput.schema'
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUncheckedUpdateInput> = z
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
		auth_session: z
			.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
			.optional(),
		auth_key: z
			.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
			.optional()
	})
	.strict()

export const AuthUserUncheckedUpdateInputObjectSchema = Schema
