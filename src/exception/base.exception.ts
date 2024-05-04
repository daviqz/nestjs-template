import { HttpException, HttpStatus } from '@nestjs/common'
import { ToastDTO } from 'src/common/toast.dto'

interface UserExceptionMessage {
	message: string
	toast?: ToastDTO
	fieldErrors?: any
}

interface ExceptionMessage extends UserExceptionMessage {
	statusCode: HttpStatus
}

export class BaseException extends HttpException {
	constructor(userMessage: UserExceptionMessage, status: HttpStatus) {
		const message: ExceptionMessage = { ...userMessage, statusCode: status }
		super(message, status)
	}
}
