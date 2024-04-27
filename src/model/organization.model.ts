import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { BaseModel } from './abstract/base.model'
import { ProductType } from './product_type.model'
import { Account } from './account.model'
import { Team } from './team.model'

@Entity()
export class Organization extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => ProductType)
	productType: ProductType

	@ManyToOne(() => Account)
	accountCreator: Account

	@ManyToMany(() => Account)
	@JoinTable()
	accounts: Account[]

	@ManyToOne(() => Team)
	teams: Team

	constructor(name: string) {
		super()
		this.name = name
	}
}
