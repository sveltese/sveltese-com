import dotenv from 'dotenv'
dotenv.config()

export const APP_NAME = process.env.APP_NAME || 'SvelteKit'
export const APP_ENV = process.env.APP_ENV || 'production'
export const APP_DEBUG = process.env.APP_DEBUG || false
export const APP_URL = process.env.APP_URL || 'http://localhost:3000'
