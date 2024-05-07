import { Injectable } from '@nestjs/common'
import { TokenExpiredError } from '@nestjs/jwt'
import { AuthGuard as NestAuthGuard } from '@nestjs/passport'
import { TokenExpiredException, UnauthorizedException } from 'src/exception/auth.exception'
@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
	handleRequest(err: any, user: any, info: Error | undefined) {
		// Você pode lançar uma exceção com base em "info" ou "err"
		if (err || !user) {
			let error = err || new UnauthorizedException()
			if (info instanceof TokenExpiredError) {
				error = new TokenExpiredException()
			}
			console.error(error)
			throw error
		}
		return user
	}
}
