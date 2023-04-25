import { z } from 'zod'
import { team_invitationsSelectObjectSchema } from './team_invitationsSelect.schema'
import { team_invitationsIncludeObjectSchema } from './team_invitationsInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsArgs> = z
	.object({
		select: z.lazy(() => team_invitationsSelectObjectSchema).optional(),
		include: z.lazy(() => team_invitationsIncludeObjectSchema).optional()
	})
	.strict()

export const team_invitationsArgsObjectSchema = Schema
