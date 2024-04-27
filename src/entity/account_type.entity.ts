import { Entity, Column } from 'typeorm'
import { BaseModel } from './abstract/base.entity'
import { AccountTypeDTO } from 'src/dto/account-type.dto'

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
