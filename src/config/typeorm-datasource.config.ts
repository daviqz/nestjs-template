import { DataSource, DataSourceOptions } from 'typeorm'
import { constants } from './constants'

const dataSourceConfig = (): DataSourceOptions => ({
	type: 'postgres',
	host: constants().DATABASE.HOST,
	port: constants().DATABASE.PORT,
	username: constants().DATABASE.USERNAME,
	password: constants().DATABASE.PASSWORD,
	database: constants().DATABASE.DATABASE,
	synchronize: false,
	logging: false,
	entities: ['dist/domain/**/*.entity.js'],
	migrations: ['dist/migrations/*.js'],
	subscribers: []
})

export default new DataSource(dataSourceConfig())

export { dataSourceConfig }
