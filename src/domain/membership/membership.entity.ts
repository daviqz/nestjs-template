import { Entity, Column, ManyToOne } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Account } from '../account/account.entity'
import { Team } from '../team/team.entity'
import { AccountType } from '../account-type/account-type.entity'

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
