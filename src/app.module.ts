import { Module } from '@nestjs/common'
import { AccountModule } from './domain/account/account.module'
import { AuthModule } from './domain/auth/auth.module'

@Module({
	imports: [AccountModule, AuthModule],
	controllers: [],
	providers: []
})
export class AppModule {}
