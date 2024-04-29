import { Injectable } from '@nestjs/common'
import { AuthDTO } from './dto/auth.dto'
import { AuthLoginDTO } from './dto/auth-login.dto'
import { AccountService } from '../account/account.service'
import { ToastDTO } from 'src/common/toast.dto'
import { AuthRegisterDTO } from './dto/auth-register.dto'

@Injectable()
export class AuthService {
	constructor(private accountService: AccountService) {}

	async login(authLoginDTO: AuthLoginDTO): Promise<AuthDTO> {
		const account = await this.accountService.findOneByEmail(authLoginDTO.email)
		if (account.password !== authLoginDTO.password) {
			throw new Error('Senha inválida!')
		}
		const authDTO = account.toDTO()
		return {
			account: authDTO,
			token: 'asdasfsafsafsaafsfd'
		}
	}

	async register(authRegisterDTO: AuthRegisterDTO): Promise<ToastDTO> {
		await this.accountService.register(authRegisterDTO)
		return new ToastDTO('Conta criada com sucesso!', 'success')
	}
}
