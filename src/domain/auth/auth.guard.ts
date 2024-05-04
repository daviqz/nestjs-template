import { Injectable } from '@nestjs/common'
import { AuthGuard as NestAuthGuard } from '@nestjs/passport'
import { UnauthorizedException } from 'src/exception/auth.exception'

@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
	handleRequest(err, user, info) {
		// Você pode lançar uma exceção com base em "info" ou "err"
		if (err || !user) {
			const error = err || new UnauthorizedException()
			console.error(error)
			throw error
		}
		return user
	}
}
