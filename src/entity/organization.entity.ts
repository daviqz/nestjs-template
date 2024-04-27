import { Entity, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm'
import { BaseModel } from './abstract/base.entity'
import { ProductType } from './product_type.entity'
import { Account } from './account.entity'
import { Team } from './team.entity'

@Entity()
export class Organization extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => ProductType)
	productType: ProductType

	@ManyToOne(() => Account)
	@JoinColumn({ name: 'created_by' })
	createdBy: Account

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
