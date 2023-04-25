import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.personal_access_tokensSelect> = z
	.object({
		id: z.boolean().optional(),
		tokenable_type: z.boolean().optional(),
		tokenable_id: z.boolean().optional(),
		name: z.boolean().optional(),
		token: z.boolean().optional(),
		abilities: z.boolean().optional(),
		last_used_at: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional()
	})
	.strict()

export const personal_access_tokensSelectObjectSchema = Schema
