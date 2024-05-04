import { HttpStatus } from '@nestjs/common'
import { BaseException } from './base.exception'

export class GenericException extends BaseException {
	constructor() {
		super({ message: 'Erro inesperado no servidor. Por favor, tente novamente mais tarde' }, HttpStatus.INTERNAL_SERVER_ERROR)
	}
}
