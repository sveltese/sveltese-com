import { z } from 'zod'
import { personal_access_tokensSelectObjectSchema } from './personal_access_tokensSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.personal_access_tokensArgs> = z
	.object({
		select: z.lazy(() => personal_access_tokensSelectObjectSchema).optional()
	})
	.strict()

export const personal_access_tokensArgsObjectSchema = Schema
