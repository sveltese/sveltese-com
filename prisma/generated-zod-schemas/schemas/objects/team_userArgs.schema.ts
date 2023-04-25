import { z } from 'zod'
import { team_userSelectObjectSchema } from './team_userSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_userArgs> = z
	.object({
		select: z.lazy(() => team_userSelectObjectSchema).optional()
	})
	.strict()

export const team_userArgsObjectSchema = Schema
