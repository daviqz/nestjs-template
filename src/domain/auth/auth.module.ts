import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from '../../domain/auth/auth.controller'
import { AuthService } from './auth.service'
import { AccountService } from '../account/account.service'
import { Account } from '../account/account.entity'
import { AuthGuard } from './auth.guard'
import { APP_GUARD } from '@nestjs/core'

@Module({
	imports: [TypeOrmModule.forFeature([Account])],
	controllers: [AuthController],
	providers: [
		AuthService,
		AccountService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard
		}
	],
	exports: []
})
export class AuthModule {}
