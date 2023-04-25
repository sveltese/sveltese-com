import { z } from 'zod'

export const SessionsScalarFieldEnumSchema = z.enum([
	'id',
	'user_id',
	'ip_address',
	'user_agent',
	'payload',
	'last_activity'
])
