import { z } from 'zod'

export const AuthKeyScalarFieldEnumSchema = z.enum([
	'id',
	'hashed_password',
	'user_id',
	'primary_key',
	'expires'
])
