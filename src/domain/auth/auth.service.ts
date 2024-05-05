import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { InvalidLoginException, InvalidRegistrationException } from 'src/exception/auth.exception'
import { AccountService } from 'src/domain/account/account.service'
import { validateRegisterForm } from 'src/validations/auth.validation'
import { ToastDTO, ToastType } from 'src/common/toast.dto'
import { AuthDTO } from './dto/auth.dto'
import { AuthLoginDTO } from './dto/auth-login.dto'
import { AuthRegisterDTO } from './dto/auth-register.dto'
import { constants } from 'src/config/constants'

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
		let tokenizedAccount = await this.jwtService.signAsync(accountDTO, { expiresIn: constants.JWT.EXPIRES_IN })

		return {
			account: authAccountDTO,
			token: tokenizedAccount
		}
	}

	async register(authRegisterDTO: AuthRegisterDTO): Promise<ToastDTO> {
		let emailAlredyUsed = await this.accountService.findOneByEmail(authRegisterDTO.email)
		let fieldErrors = validateRegisterForm(authRegisterDTO)
		if (emailAlredyUsed) {
			if (!fieldErrors) {
				fieldErrors = {}
			}
			fieldErrors.email = 'Email já cadastrado'
		}

		if (fieldErrors) {
			throw new InvalidRegistrationException(fieldErrors)
		}
		authRegisterDTO.password = await bcrypt.hash(authRegisterDTO.password, await bcrypt.genSalt())
		await this.accountService.register(authRegisterDTO)
		return new ToastDTO('Conta criada com sucesso!', ToastType.SUCCESS)
	}
}
