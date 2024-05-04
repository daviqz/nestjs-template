import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './config/exception.config'

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule)
	app.enableCors()
	app.useGlobalFilters(new AllExceptionsFilter())
	await app.listen(5000)
}
bootstrap()
