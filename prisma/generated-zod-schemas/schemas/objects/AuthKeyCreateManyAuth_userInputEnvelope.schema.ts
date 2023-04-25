import { z } from 'zod'
import { AuthKeyCreateManyAuth_userInputObjectSchema } from './AuthKeyCreateManyAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthKeyCreateManyAuth_userInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => AuthKeyCreateManyAuth_userInputObjectSchema),
			z.lazy(() => AuthKeyCreateManyAuth_userInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const AuthKeyCreateManyAuth_userInputEnvelopeObjectSchema = Schema
