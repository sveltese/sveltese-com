import { z } from 'zod'

export const UsersScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'email',
	'email_verified_at',
	'password',
	'remember_token',
	'current_team_id',
	'profile_photo_path',
	'created_at',
	'updated_at',
	'two_factor_secret',
	'two_factor_recovery_codes',
	'two_factor_confirmed_at'
])
