import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AccountModule } from './domain/account/account.module'
import { AuthModule } from './domain/auth/auth.module'
import { dataSourceConfig } from './config/typeorm-datasource.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { constants } from './config/constants'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		JwtModule.register({ secret: constants().JWT.SECRET, global: true, signOptions: { expiresIn: constants().JWT.EXPIRES_IN } }),
		TypeOrmModule.forRoot(dataSourceConfig()),
		AccountModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
