import { z } from 'zod';

export const Password_reset_tokensScalarFieldEnumSchema = z.enum(['email', 'token', 'created_at']);
