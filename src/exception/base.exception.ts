import { HttpException, HttpStatus } from '@nestjs/common'
import { ToastDTO } from 'src/common/toast.dto'

export interface UserExceptionMessage {
	message: string
	toast?: ToastDTO
	fieldErrors?: any
}

export interface ExceptionMessage extends UserExceptionMessage {
	status: HttpStatus
}

export class BaseException extends HttpException {
	constructor(userMessage: UserExceptionMessage, status: HttpStatus) {
		const message: ExceptionMessage = { ...userMessage, status: status }
		super(message, status)
	}
}
