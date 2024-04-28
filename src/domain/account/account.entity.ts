import { Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { AccountType } from '../account-type/account-type.entity'
import { Organization } from '../organization/organization.entity'
import { Membership } from '../membership/membership.entity'
import { AuthRegisterDTO } from 'src/domain/auth/dto/auth-register.dto'
import { AccountDTO } from 'src/domain/account/dto/account.dto'

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

	fromRegisterDTO(dto: AuthRegisterDTO): Account {
		this.username = dto.username
		this.email = dto.email
		this.password = dto.password
		return this
	}

	toDTO(): AccountDTO {
		return {
			username: this.username,
			email: this.email,
			accountViewType: this.accountViewType
		}
	}
}
