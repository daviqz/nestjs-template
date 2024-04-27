import { Controller, Get, Post, Body } from '@nestjs/common'
import { AccountService } from '../service/account.service'
import { AccountRegisterFormDTO } from '../dto/account-register-form.dto'
import { ToastDTO } from 'src/dto/toast.dto'
import { AccountLoginFormDTO } from 'src/dto/account-login-form.dto'
import { AccountLoginDTO } from 'src/dto/account-login.dto'

@Controller('account')
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Post('/login')
	loginAccount(@Body() accountLoginDTO: AccountLoginFormDTO): Promise<AccountLoginDTO> {
		return this.accountService.login(accountLoginDTO)
	}

	@Post('/register')
	registerAccount(@Body() accountRegisterFormDTO: AccountRegisterFormDTO): Promise<ToastDTO> {
		return this.accountService.register(accountRegisterFormDTO)
	}
}
