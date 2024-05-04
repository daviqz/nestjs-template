import { HttpStatus } from '@nestjs/common'
import { BaseException } from './base.exception'
import { ToastDTO, ToastType } from 'src/common/toast.dto'

//Login
export class InvalidLoginException extends BaseException {
	constructor() {
		super({ message: 'Login inválido', toast: new ToastDTO('Login inválido', ToastType.ERROR) }, HttpStatus.UNAUTHORIZED)
	}
}

//Register
export class InvalidRegistrationException extends BaseException {
	constructor(fieldErrors: Record<string, string> | null) {
		super(
			{
				message: 'Campos inválidos no registro',
				toast: new ToastDTO('Campos inválidos no registro', ToastType.ERROR),
				fieldErrors: fieldErrors
			},
			HttpStatus.BAD_REQUEST
		)
	}
}

export class EmailAlreadyUsedException extends BaseException {
	constructor() {
		super({ message: 'Este e-mail já está em uso', toast: new ToastDTO('Este e-mail já está em uso', ToastType.ERROR) }, HttpStatus.BAD_REQUEST)
	}
}

//General
export class UnauthorizedException extends BaseException {
	constructor() {
		super({ message: 'Não autorizado', toast: new ToastDTO('Não autorizado', ToastType.ERROR) }, HttpStatus.UNAUTHORIZED)
	}
}

export class TokenExpiredException extends BaseException {
	constructor() {
		super(
			{
				message: 'Token de autenticação expirado, faça o login novamente',
				toast: new ToastDTO('Token de autenticação expirado, faça o login novamente', ToastType.ERROR),
				isExpiredToken: true
			},
			HttpStatus.UNAUTHORIZED
		)
	}
}
