import { Controller, Get, Post, Body } from '@nestjs/common'
import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	// @Post('/login')
	// loginAccount(@Body() accountLoginDTO: AccountLoginFormDTO): Promise<AccountLoginDTO> {
	// 	return this.accountService.login(accountLoginDTO)
	// }

	// @Post('/register')
	// registerAccount(@Body() accountRegisterFormDTO: AccountRegisterFormDTO): Promise<ToastDTO> {
	// 	return this.accountService.register(accountRegisterFormDTO)
	// }
}
