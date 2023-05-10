import { z } from 'zod'
import { team_invitationsWhereUniqueInputObjectSchema } from './team_invitationsWhereUniqueInput.schema'
import { team_invitationsCreateWithoutTeamsInputObjectSchema } from './team_invitationsCreateWithoutTeamsInput.schema'
import { team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema } from './team_invitationsUncheckedCreateWithoutTeamsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.team_invitationsCreateOrConnectWithoutTeamsInput> = z
	.object({
		where: z.lazy(() => team_invitationsWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => team_invitationsCreateWithoutTeamsInputObjectSchema),
			z.lazy(() => team_invitationsUncheckedCreateWithoutTeamsInputObjectSchema)
		])
	})
	.strict()

export const team_invitationsCreateOrConnectWithoutTeamsInputObjectSchema = Schema
