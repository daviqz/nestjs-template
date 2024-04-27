import { Injectable } from '@nestjs/common'

@Injectable()
export class AccountService {
	loginAccount(): string {
		return 'Hello World!'
	}

	registerAccount(): string {
		return 'Hello World!'
	}
}
