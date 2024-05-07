export class AuthAccountDTO {
	username: string
	email: string
}

export class AuthDTO {
	account: AuthAccountDTO
	token: string
}

export class AuthLoginDTO {
	email: string
	password: string
}

export class AuthRegisterDTO {
	username: string
	email: string
	password: string
	confirmPassword: string
}
