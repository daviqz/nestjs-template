import { Entity, Column, OneToMany } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { AccountTypeDTO } from 'src/domain/account-type/dto/account-type.dto'
import { Account } from '../account/account.entity'
import { Membership } from '../membership/membership.entity'

@Entity()
export class AccountType extends BaseModel {
	@Column()
	name: string

	@OneToMany(() => Account, (account) => account.accountViewType)
	accounts: Account[]

	@OneToMany(() => Membership, (membership) => membership.team)
	memberships: Membership[]

	constructor(name?: string, accounts?: Account[], memberships?: Membership[]) {
		super()
		this.name = name
		this.accounts = accounts
		this.memberships = memberships
	}

	toDTO(): AccountTypeDTO {
		return {
			id: this.id,
			name: this.name
		}
	}
}
