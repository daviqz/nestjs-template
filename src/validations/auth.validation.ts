import { AuthRegisterDTO } from 'src/domain/auth/dto/auth-register.dto'
import { AuthLoginDTO } from 'src/domain/auth/dto/auth-login.dto'
import { LoginFormZod, RegisterFormZod } from './utils/objects-zod-validation.utils'
import { parseZodResponse } from './utils/parse-response-zod-validation.utils'

const validateLoginForm = (loginForm: AuthLoginDTO): Record<string, string> | null => {
	return parseZodResponse(LoginFormZod, loginForm)
}

const validateRegisterForm = (registerForm: AuthRegisterDTO): Record<string, string> | null => {
	return parseZodResponse(RegisterFormZod, registerForm)
}

export { validateRegisterForm, validateLoginForm }
