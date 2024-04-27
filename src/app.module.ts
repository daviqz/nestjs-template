import { Module } from '@nestjs/common'
import { AccountModule } from './config/module/account.module'

@Module({
	imports: [AccountModule]
})
export class AppModule {}
