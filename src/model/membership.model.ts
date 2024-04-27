import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseModel } from './abstract/base.model'
import { Account } from './account.model'
import { Team } from './team.model'
import { AccountType } from './account_type.model'

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
