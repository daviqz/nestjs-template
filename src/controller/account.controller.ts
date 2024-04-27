import { Controller, Get, Post, Body } from '@nestjs/common'
import { AccountService } from '../service/account.service'
import { AccountRegisterDTO } from '../dto/account-register.dto'
import { ToastDTO } from 'src/dto/toast.dto'

@Controller('account')
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Post('/login')
	loginAccount(): string {
		return this.accountService.login()
	}

	@Post('/register')
	registerAccount(@Body() accountRegisterDTO: AccountRegisterDTO): ToastDTO {
		return this.accountService.register(accountRegisterDTO)
	}
}
