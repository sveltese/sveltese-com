import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_userTeam_idUser_idCompoundUniqueInput> = z
	.object({
		team_id: z.bigint(),
		user_id: z.bigint()
	})
	.strict()

export const team_userTeam_idUser_idCompoundUniqueInputObjectSchema = Schema
