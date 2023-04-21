import { z } from 'zod';
import { BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { team_invitationsUpdateManyWithoutTeamsNestedInputObjectSchema } from './team_invitationsUpdateManyWithoutTeamsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.teamsUpdateInput> = z
	.object({
		id: z
			.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		user_id: z
			.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		personal_team: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		created_at: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		updated_at: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		team_invitations: z
			.lazy(() => team_invitationsUpdateManyWithoutTeamsNestedInputObjectSchema)
			.optional()
	})
	.strict();

export const teamsUpdateInputObjectSchema = Schema;
