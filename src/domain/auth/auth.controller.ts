import { Controller, Post, Body, UseGuards, Request, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthLoginDTO } from './dto/auth-login.dto'
import { AuthDTO } from './dto/auth.dto'
import { AuthRegisterDTO } from './dto/auth-register.dto'
import { ToastDTO } from 'src/common/toast.dto'
import { Public } from './decorators/public.decorator'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Post('/login')
	async loginAccount(@Body() authLoginDTO: AuthLoginDTO): Promise<AuthDTO> {
		return await this.authService.login(authLoginDTO)
	}

	@Public()
	@Post('/register')
	async registerAccount(@Body() authRegisterFormDTO: AuthRegisterDTO): Promise<ToastDTO> {
		return await this.authService.register(authRegisterFormDTO)
	}
}
