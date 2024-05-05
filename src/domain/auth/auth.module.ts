import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { constants } from 'src/config/constants'
import { AccountService } from '../account/account.service'
import { Account } from '../account/account.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({ secret: constants.JWT.SECRET, global: true }),
		TypeOrmModule.forFeature([Account])
	],
	controllers: [AuthController],
	providers: [AuthService, AccountService, JwtStrategy],
	exports: []
})
export class AuthModule {}
