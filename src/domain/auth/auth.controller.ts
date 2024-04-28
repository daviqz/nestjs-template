import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthLoginDTO } from './dto/auth-login.dto'
import { AuthDTO } from './dto/auth.dto'
import { AuthRegisterDTO } from './dto/auth-register.dto'
import { ToastDTO } from 'src/common/toast.dto'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/login')
	loginAccount(@Body() authLoginDTO: AuthLoginDTO): Promise<AuthDTO> {
		return this.authService.login(authLoginDTO)
	}

	@Post('/register')
	registerAccount(@Body() authRegisterFormDTO: AuthRegisterDTO): Promise<ToastDTO> {
		return this.authService.register(authRegisterFormDTO)
	}
}
