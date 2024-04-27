import { DataSource } from 'typeorm'

export default new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'postgres',
	synchronize: false,
	logging: false,
	// migrations: ['src/migrations/*.js'],
	entities: ['dist/model/*.model.js'],
	migrations: ['migrations/*.ts'],
	subscribers: []
})
