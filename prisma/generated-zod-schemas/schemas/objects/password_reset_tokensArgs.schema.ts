import { z } from 'zod'
import { password_reset_tokensSelectObjectSchema } from './password_reset_tokensSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.password_reset_tokensArgs> = z
	.object({
		select: z.lazy(() => password_reset_tokensSelectObjectSchema).optional()
	})
	.strict()

export const password_reset_tokensArgsObjectSchema = Schema
