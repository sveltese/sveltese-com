import { z } from 'zod'

export const Personal_access_tokensScalarFieldEnumSchema = z.enum([
	'id',
	'tokenable_type',
	'tokenable_id',
	'name',
	'token',
	'abilities',
	'last_used_at',
	'expires_at',
	'created_at',
	'updated_at'
])
