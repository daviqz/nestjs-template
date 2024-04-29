import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Account } from '../account/account.entity'
import { Team } from '../team/team.entity'
import { AccountType } from '../account-type/account-type.entity'

@Entity()
export class Membership extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => Account)
	@JoinColumn({ name: 'account_id' })
	account: Account

	@ManyToOne(() => Team)
	@JoinColumn({ name: 'team_id' })
	team: Team

	@ManyToOne(() => AccountType)
	@JoinColumn({ name: 'account_type_id' })
	accountType: AccountType

	constructor(name?: string, account?: Account, team?: Team, accountType?: AccountType) {
		super()
		this.name = name
		this.account = account
		this.team = team
		this.accountType = accountType
	}
}
