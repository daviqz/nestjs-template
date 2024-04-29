import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthController } from '../../domain/auth/auth.controller'
import { AuthService } from './auth.service'
import { dataSourceConfig } from '../../config/typeorm-datasource.config'
import { AccountService } from '../account/account.service'
import { Account } from '../account/account.entity'

@Module({
	imports: [TypeOrmModule.forRoot(dataSourceConfig), TypeOrmModule.forFeature([Account])],
	controllers: [AuthController],
	providers: [AuthService, AccountService],
	exports: []
})
export class AuthModule {}
