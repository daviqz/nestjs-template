import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { AuthDTO } from './dto/auth.dto'
import { AuthLoginDTO } from './dto/auth-login.dto'
import { AccountService } from 'src/domain/account/account.service'
import { ToastDTO } from 'src/common/toast.dto'
import { AuthRegisterDTO } from './dto/auth-register.dto'

@Injectable()
export class AuthService {
	constructor(
		private accountService: AccountService,
		private jwtService: JwtService
	) {}

	async login(authLoginDTO: AuthLoginDTO): Promise<AuthDTO> {
		const account = await this.accountService.findOneByEmail(authLoginDTO.email)
		if (!account) {
			throw new Error('Conta não encontrada!')
		}
		const isMatch = await bcrypt.compare(authLoginDTO.password, account.password)
		if (!isMatch) {
			throw new Error('Senha inválida!')
		}
		const authAccountDTO = account.toAuthAccountDTO()
		const accountDTO = account.toAuthTokenDTO()
		const tokenizedAccount = await this.jwtService.signAsync(accountDTO)
		return {
			account: authAccountDTO,
			token: tokenizedAccount
		}
	}

	async register(authRegisterDTO: AuthRegisterDTO): Promise<ToastDTO> {
		authRegisterDTO.password = await bcrypt.hash(authRegisterDTO.password, await bcrypt.genSalt())
		await this.accountService.register(authRegisterDTO)
		return new ToastDTO('Conta criada com sucesso!', 'success')
	}
}
