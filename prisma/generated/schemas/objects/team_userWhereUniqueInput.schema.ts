import { z } from 'zod'
import { team_userTeam_idUser_idCompoundUniqueInputObjectSchema } from './team_userTeam_idUser_idCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_userWhereUniqueInput> = z
	.object({
		id: z.bigint().optional(),
		team_id_user_id: z.lazy(() => team_userTeam_idUser_idCompoundUniqueInputObjectSchema).optional()
	})
	.strict()

export const team_userWhereUniqueInputObjectSchema = Schema
