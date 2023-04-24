import nodemailer from 'nodemailer'
import { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD } from '$env/static/private'

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma
}

const emailClient = nodemailer.createTransport({
	host: MAIL_HOST,
	port: MAIL_PORT,
	secure: false,
	auth: {
		user: MAIL_USERNAME,
		pass: MAIL_PASSWORD
	}
})

export { emailClient }
