// app.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'postgres',
			database: 'postgres',
			synchronize: false,
			logging: false,
			entities: ['dist/model/*.model.js'],
			subscribers: []
		})
	],
	controllers: [],
	providers: []
})
export class AppModule {}
