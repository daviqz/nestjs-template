import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'
import { Account } from 'src/domain/account/account.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Account])],
	controllers: [AccountController],
	providers: [AccountService],
	exports: []
})
export class AccountModule {}
