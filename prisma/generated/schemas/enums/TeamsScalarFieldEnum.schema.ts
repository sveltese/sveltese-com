import { z } from 'zod'

export const TeamsScalarFieldEnumSchema = z.enum([
	'id',
	'user_id',
	'name',
	'personal_team',
	'created_at',
	'updated_at'
])
