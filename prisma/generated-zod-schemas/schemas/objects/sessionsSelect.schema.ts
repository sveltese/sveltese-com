import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.sessionsSelect> = z
	.object({
		id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		ip_address: z.boolean().optional(),
		user_agent: z.boolean().optional(),
		payload: z.boolean().optional(),
		last_activity: z.boolean().optional()
	})
	.strict()

export const sessionsSelectObjectSchema = Schema
