import { z } from 'zod'
import { AuthSessionFindManySchema } from '../findManyAuthSession.schema'
import { AuthKeyFindManySchema } from '../findManyAuthKey.schema'
import { AuthUserCountOutputTypeArgsObjectSchema } from './AuthUserCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserSelect> = z
	.object({
		id: z.boolean().optional(),
		auth_session: z.union([z.boolean(), z.lazy(() => AuthSessionFindManySchema)]).optional(),
		auth_key: z.union([z.boolean(), z.lazy(() => AuthKeyFindManySchema)]).optional(),
		name: z.boolean().optional(),
		email: z.boolean().optional(),
		_count: z.union([z.boolean(), z.lazy(() => AuthUserCountOutputTypeArgsObjectSchema)]).optional()
	})
	.strict()

export const AuthUserSelectObjectSchema = Schema
