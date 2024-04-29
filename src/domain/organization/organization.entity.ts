import { Entity, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToMany } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Account } from '../account/account.entity'
import { Team } from '../team/team.entity'
import { SubscriptionPlan } from '../subscription-plan/subscription-plan.entity'

@Entity()
export class Organization extends BaseModel {
	@Column()
	name: string

	@ManyToOne(() => SubscriptionPlan)
	@JoinColumn({ name: 'subscription_plan_id' })
	subscriptionPlan: SubscriptionPlan

	@ManyToOne(() => Account)
	@JoinColumn({ name: 'created_by_account_id' })
	createdBy: Account

	@ManyToMany(() => Account, (account) => account.organizations)
	accounts: Account[]

	@OneToMany(() => Team, (team) => team.organization)
	teams: Team[]

	constructor(name?: string, subscriptionPlan?: SubscriptionPlan, createdBy?: Account, accounts?: Account[], teams?: Team[]) {
		super()
		this.name = name
		this.subscriptionPlan = subscriptionPlan
		this.createdBy = createdBy
		this.accounts = accounts
		this.teams = teams
	}
}
