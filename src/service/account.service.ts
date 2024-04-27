import { Injectable, Inject } from '@nestjs/common'
import { Account } from '../entity/account.entity'
import { AccountRegisterFormDTO } from 'src/dto/account-register-form.dto'
import { ToastDTO } from 'src/dto/toast.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AccountLoginFormDTO } from 'src/dto/account-login-form.dto'
import { AccountLoginDTO } from 'src/dto/account-login.dto'

@Injectable()
export class AccountService {
	constructor(
		@InjectRepository(Account)
		private accountRepository: Repository<Account>
	) {}

	async login(accountLoginDTO: AccountLoginFormDTO): Promise<AccountLoginDTO> {
		const account = await this.accountRepository.findOne({ where: { email: accountLoginDTO.email }, relations: ['accountViewType'] })
		if (account.password !== accountLoginDTO.password) {
			throw new Error('Senha inválida!')
		}
		const accountDto = account.toDTO()
		return {
			account: accountDto,
			token: 'asdasfsafsafsaafsfd'
		}
	}

	async register(accountRegisterFormDTO: AccountRegisterFormDTO): Promise<ToastDTO> {
		const account = new Account().fromRegisterDTO(accountRegisterFormDTO)
		await this.accountRepository.save(account)
		return new ToastDTO('Conta criada com sucesso!', 'success')
	}

	findAll(): Promise<Account[]> {
		return this.accountRepository.find()
	}
}
