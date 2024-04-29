import { Entity, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { ProductType } from '../product-type/product-type.entity'
import { Account } from '../account/account.entity'
import { Team } from '../team/team.entity'

@Entity()
export class Organization extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => ProductType)
	productType: ProductType

	@ManyToOne(() => Account)
	@JoinColumn({ name: 'created_by_account_id' })
	createdBy: Account

	@ManyToMany(() => Account)
	@JoinTable()
	accounts: Account[]

	@ManyToOne(() => Team)
	@JoinTable()
	teams: Team[]

	constructor(name?: string, productType?: ProductType, createdBy?: Account, accounts?: Account[], teams?: Team[]) {
		super()
		this.name = name
		this.productType = productType
		this.createdBy = createdBy
		this.accounts = accounts
		this.teams = teams
	}
}
