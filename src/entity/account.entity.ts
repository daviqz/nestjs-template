import { Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm'
import { BaseModel } from './abstract/base.entity'
import { AccountType } from './account_type.entity'
import { Organization } from './organization.entity'
import { Membership } from './membership.entity'
import { AccountRegisterDTO } from 'src/dto/account-register.dto'

@Entity()
export class Account extends BaseModel {
	@Column()
	username: string

	@Column()
	email: string

	@Column()
	password: string

	@ManyToOne(() => AccountType)
	@JoinColumn({ name: 'account_view_type' })
	accountViewType: AccountType

	@ManyToMany(() => Organization)
	@JoinTable()
	organizations: Organization[]

	@OneToMany(() => Membership, (membership) => membership.account)
	memberships: Membership[]

	constructor(username?: string, email?: string, password?: string) {
		super()
		this.username = username
		this.email = email
		this.password = password
	}

	fromRegisterDTO(dto: AccountRegisterDTO): Account {
		this.username = dto.username
		this.email = dto.email
		this.password = dto.password
		return this
	}
}
