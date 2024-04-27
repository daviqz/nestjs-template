import { Controller, Get, Post } from '@nestjs/common'
import { AccountService } from '../service/account.service'

@Controller()
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Post('/account/login')
	loginAccount(): string {
		return this.accountService.loginAccount()
	}

	@Post('/account/register')
	registerAccount(): string {
		return this.accountService.registerAccount()
	}
}
