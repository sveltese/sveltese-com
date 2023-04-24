import nodemailer from 'nodemailer'
import { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } from '$env/static/private'

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma
}

const emailClient = nodemailer.createTransport({
	host: MAIL_HOST,
	port: MAIL_PORT,
	secure: false,
	auth: {
		user: MAIL_USER,
		pass: MAIL_PASS
	}
})

export { emailClient }
