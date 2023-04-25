import { z } from 'zod'

export const AuthUserScalarFieldEnumSchema = z.enum(['id', 'name', 'email'])
