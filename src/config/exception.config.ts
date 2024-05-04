import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { GenericException } from 'src/exception/generic.exception'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		if (!(exception instanceof HttpException)) {
			exception = new GenericException()
		}

		const ctx = host.switchToHttp()
		const response = ctx.getResponse()
		const status = exception.getStatus()

		response.status(status).json(exception.getResponse())
	}
}
