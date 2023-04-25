import { z } from 'zod'
import { teamsSelectObjectSchema } from './teamsSelect.schema'
import { teamsIncludeObjectSchema } from './teamsInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.teamsArgs> = z
	.object({
		select: z.lazy(() => teamsSelectObjectSchema).optional(),
		include: z.lazy(() => teamsIncludeObjectSchema).optional()
	})
	.strict()

export const teamsArgsObjectSchema = Schema
