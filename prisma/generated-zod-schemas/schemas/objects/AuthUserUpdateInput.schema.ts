import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInput.schema'
import { AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserUpdateInput> = z
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
			.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema)
			.optional(),
		auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema).optional()
	})
	.strict()

export const AuthUserUpdateInputObjectSchema = Schema
