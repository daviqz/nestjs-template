import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountController } from '../../controller/account.controller'
import { AccountService } from '../../service/account.service'
import { dataSourceConfig } from '../typeorm-datasource.config'
import { Account } from 'src/entity/account.entity'

@Module({
	imports: [TypeOrmModule.forRoot(dataSourceConfig), TypeOrmModule.forFeature([Account])],
	controllers: [AccountController],
	providers: [AccountService],
	exports: []
})
export class AccountModule {}
