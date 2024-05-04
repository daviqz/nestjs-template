import { Controller, Get, UseGuards } from '@nestjs/common'
import { AccountService } from './account.service'
import { AuthGuard } from 'src/domain/auth/auth.guard'

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Get('/protected')
	testProtected() {
		return { fafau: 'protected' }
	}

	@Get('/protected-2')
	testProtected2() {
		return { fafau: 'protected2' }
	}
}
