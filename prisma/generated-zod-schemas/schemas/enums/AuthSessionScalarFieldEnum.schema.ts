import { z } from 'zod'

export const AuthSessionScalarFieldEnumSchema = z.enum([
	'id',
	'user_id',
	'active_expires',
	'idle_expires'
])
