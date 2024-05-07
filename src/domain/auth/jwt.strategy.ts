import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { constants } from 'src/config/constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: constants.JWT.SECRET
		})
	}

	async validate(payload: any) {
		// Aqui pode adicionar a lógica para validar o payload do token.
		// Por exemplo, pode verificar se o usuário existe no banco de dados.
		// Se a validação falhar, dá pra lançar uma UnauthorizedException.

		return { userId: payload.id, username: payload.username }
	}
}
