import { Entity, Column } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { AccountTypeDTO } from 'src/domain/account-type/account-type.dto'

@Entity()
export class AccountType extends BaseModel {
	@Column()
	name: string

	constructor(name: string) {
		super()
		this.name = name
	}

	toDTO(): AccountTypeDTO {
		return {
			id: this.id,
			name: this.name
		}
	}
}
