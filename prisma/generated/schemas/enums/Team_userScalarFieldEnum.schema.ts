import { z } from 'zod';

export const Team_userScalarFieldEnumSchema = z.enum([
	'id',
	'team_id',
	'user_id',
	'role',
	'created_at',
	'updated_at'
]);
