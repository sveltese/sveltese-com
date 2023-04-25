import { z } from 'zod'
import { sessionsSelectObjectSchema } from './sessionsSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsArgs> = z
	.object({
		select: z.lazy(() => sessionsSelectObjectSchema).optional()
	})
	.strict()

export const sessionsArgsObjectSchema = Schema
