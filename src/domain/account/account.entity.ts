import { Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { AccountType } from '../account-type/account-type.entity'
import { Organization } from '../organization/organization.entity'
import { Membership } from '../membership/membership.entity'
import { AuthRegisterDTO } from 'src/domain/auth/dto/auth-register.dto'
import { AccountDTO } from 'src/domain/account/dto/account.dto'
import { AuthAccountDTO } from '../auth/dto/auth-account.dto'

@Entity()
export class Account extends BaseModel {
	@Column()
	username: string

	@Column()
	email: string

	@Column()
	password: string

	@ManyToOne(() => AccountType)
	@JoinColumn({ name: 'account_view_type_id' })
	accountViewType: AccountType

	@ManyToMany(() => Organization)
	@JoinTable({
		name: 'accounts_organizations',
		joinColumn: { name: 'account_id', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'organization_id', referencedColumnName: 'id' }
	})
	organizations: Organization[]

	@OneToMany(() => Membership, (membership) => membership.account)
	memberships: Membership[]

	constructor(
		username?: string,
		email?: string,
		password?: string,
		accountViewType?: AccountType,
		organizations?: Organization[],
		memberships?: Membership[]
	) {
		super()
		this.username = username
		this.email = email
		this.password = password
		this.accountViewType = accountViewType
		this.organizations = organizations
		this.memberships = memberships
	}

	fromRegisterDTO(dto: AuthRegisterDTO): Account {
		this.username = dto.username
		this.email = dto.email
		this.password = dto.password
		return this
	}

	toDTO(): AccountDTO {
		return {
			id: this.id,
			username: this.username,
			email: this.email,
			accountViewType: this.accountViewType,
			organizations: this.organizations,
			memberships: this.memberships,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		}
	}

	toAuthAccountDTO(): AuthAccountDTO {
		return {
			username: this.username,
			email: this.email
		}
	}

	toAuthTokenDTO(): AccountDTO {
		return {
			id: this.id,
			username: this.username,
			email: this.email,
			accountViewType: this.accountViewType,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		}
	}
}
