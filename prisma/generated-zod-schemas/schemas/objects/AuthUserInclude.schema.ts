import { z } from 'zod'
import { AuthSessionFindManySchema } from '../findManyAuthSession.schema'
import { AuthKeyFindManySchema } from '../findManyAuthKey.schema'
import { AuthUserCountOutputTypeArgsObjectSchema } from './AuthUserCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthUserInclude> = z
	.object({
		auth_session: z.union([z.boolean(), z.lazy(() => AuthSessionFindManySchema)]).optional(),
		auth_key: z.union([z.boolean(), z.lazy(() => AuthKeyFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => AuthUserCountOutputTypeArgsObjectSchema)]).optional()
	})
	.strict()

export const AuthUserIncludeObjectSchema = Schema
