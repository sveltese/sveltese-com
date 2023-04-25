import { z } from 'zod'
import { AuthSessionCreateManyAuth_userInputObjectSchema } from './AuthSessionCreateManyAuth_userInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthSessionCreateManyAuth_userInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => AuthSessionCreateManyAuth_userInputObjectSchema),
			z.lazy(() => AuthSessionCreateManyAuth_userInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict()

export const AuthSessionCreateManyAuth_userInputEnvelopeObjectSchema = Schema
