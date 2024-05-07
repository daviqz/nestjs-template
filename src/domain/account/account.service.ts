import { Injectable } from '@nestjs/common'
import { Account } from './account.entity'
import { AuthRegisterDTO } from 'src/domain/auth/dto/auth.dtos'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class AccountService {
	constructor(
		@InjectRepository(Account)
		private accountRepository: Repository<Account>
	) {}

	findOneByEmail(email: string): Promise<Account> {
		return this.accountRepository.findOne({ where: { email }, relations: ['accountViewType'] })
	}

	async register(authRegisterDTO: AuthRegisterDTO): Promise<void> {
		const account = new Account().fromRegisterDTO(authRegisterDTO)
		await this.accountRepository.save(account)
	}

	findAll(): Promise<Account[]> {
		return this.accountRepository.find()
	}
}
