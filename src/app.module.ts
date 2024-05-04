import { Module } from '@nestjs/common'
import { AccountModule } from './domain/account/account.module'
import { AuthModule } from './domain/auth/auth.module'
import { dataSourceConfig } from './config/typeorm-datasource.config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forRoot(dataSourceConfig()), AccountModule, AuthModule],
	controllers: [],
	providers: []
})
export class AppModule {}
