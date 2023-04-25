import { z } from 'zod'
import { TeamsCountOutputTypeSelectObjectSchema } from './TeamsCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TeamsCountOutputTypeArgs> = z
	.object({
		select: z.lazy(() => TeamsCountOutputTypeSelectObjectSchema).optional()
	})
	.strict()

export const TeamsCountOutputTypeArgsObjectSchema = Schema
