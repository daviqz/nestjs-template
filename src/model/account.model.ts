import { Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm'
import { BaseModel } from './abstract/base.model'
import { AccountType } from './account_type.model'
import { Organization } from './organization.model'
import { Membership } from './membership.model'

@Entity()
export class Account extends BaseModel {
	@Column()
	username: string

	@Column()
	email: string

	@Column()
	password: string

	@ManyToOne(() => AccountType)
	accountViewType: AccountType

	@ManyToMany(() => Organization)
	@JoinTable()
	organizations: Organization[]

	@OneToMany(() => Membership, (membership) => membership.account)
	memberships: Membership[]

	constructor(username: string, email: string, password: string) {
		super()
		this.username = username
		this.email = email
		this.password = password
	}
}
