import { Test, TestingModule } from '@nestjs/testing'
import { AccountController } from '../domain/account/account.controller'
import { AccountService } from '../domain/account/account.service'

describe('AccountController', () => {
	let accountController: AccountController

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AccountController],
			providers: [AccountService]
		}).compile()

		accountController = app.get<AccountController>(AccountController)
	})

	describe('root', () => {
		//FIXME: make tests work
		it('should return "Hello World!"', () => {
			expect(accountController.registerAccount()).toBe('Hello World!')
		})
	})
})
