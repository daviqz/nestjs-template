import { Injectable, Inject } from '@nestjs/common'
import { Account } from '../entity/account.entity'
import { AccountRegisterDTO } from 'src/dto/account-register.dto'
import { ToastDTO } from 'src/dto/toast.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class AccountService {
	constructor(
		@InjectRepository(Account)
		private accountRepository: Repository<Account>
	) {}

	login(): string {
		return 'this.accountRepository.login()'
	}

	register(accountRegisterDTO: AccountRegisterDTO): ToastDTO {
		const account = new Account().fromRegisterDTO(accountRegisterDTO)
		this.accountRepository.save(account)
		return new ToastDTO('Conta criada com sucesso!', 'success')
	}

	async findAll(): Promise<Account[]> {
		return this.accountRepository.find()
	}
}
