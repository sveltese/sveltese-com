import { z } from 'zod'
import { usersSelectObjectSchema } from './usersSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.usersArgs> = z
	.object({
		select: z.lazy(() => usersSelectObjectSchema).optional()
	})
	.strict()

export const usersArgsObjectSchema = Schema
