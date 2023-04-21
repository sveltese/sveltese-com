import { z } from 'zod';

export const Team_invitationsScalarFieldEnumSchema = z.enum([
	'id',
	'team_id',
	'email',
	'role',
	'created_at',
	'updated_at'
]);
