import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'
import { dataSourceConfig } from '../../config/typeorm-datasource.config'
import { Account } from 'src/domain/account/account.entity'

@Module({
	imports: [TypeOrmModule.forRoot(dataSourceConfig), TypeOrmModule.forFeature([Account])],
	controllers: [AccountController],
	providers: [AccountService],
	exports: []
})
export class AccountModule {}
