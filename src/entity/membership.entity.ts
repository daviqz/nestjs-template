import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseModel } from './abstract/base.entity'
import { Account } from './account.entity'
import { Team } from './team.entity'
import { AccountType } from './account_type.entity'

@Entity()
export class Membership extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => Account)
	account: Account

	@ManyToOne(() => Team)
	team: Team

	@ManyToOne(() => AccountType)
	accountType: AccountType

	constructor(name: string) {
		super()
		this.name = name
	}
}
