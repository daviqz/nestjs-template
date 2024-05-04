import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { EmailAlreadyUsedException, InvalidLoginException, InvalidRegistrationException } from 'src/exception/auth.exception'
import { AccountService } from 'src/domain/account/account.service'
import { validateRegisterForm } from 'src/validations/auth.validation'
import { ToastDTO, ToastType } from 'src/common/toast.dto'
import { AuthDTO } from './dto/auth.dto'
import { AuthLoginDTO } from './dto/auth-login.dto'
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
			throw new InvalidLoginException()
		}
		const isMatch = await bcrypt.compare(authLoginDTO.password, account.password)
		if (!isMatch) {
			throw new InvalidLoginException()
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
		let emailAlredyUsed = await this.accountService.findOneByEmail(authRegisterDTO.email)
		if (emailAlredyUsed) {
			throw new EmailAlreadyUsedException()
		}
		const fieldErrors = validateRegisterForm(authRegisterDTO)
		if (fieldErrors) {
			throw new InvalidRegistrationException(fieldErrors)
		}
		authRegisterDTO.password = await bcrypt.hash(authRegisterDTO.password, await bcrypt.genSalt())
		await this.accountService.register(authRegisterDTO)
		return new ToastDTO('Conta criada com sucesso!', ToastType.SUCCESS)
	}
}
