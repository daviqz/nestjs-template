import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthLoginDTO, AuthDTO, AuthRegisterDTO } from './dto/auth.dtos'
import { ToastDTO } from 'src/common/toast.dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('/login')
	async loginAccount(@Body() authLoginDTO: AuthLoginDTO): Promise<AuthDTO> {
		return await this.authService.login(authLoginDTO)
	}

	@Post('/register')
	async registerAccount(@Body() authRegisterFormDTO: AuthRegisterDTO): Promise<ToastDTO> {
		return await this.authService.register(authRegisterFormDTO)
	}
}
