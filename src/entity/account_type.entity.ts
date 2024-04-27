import { Entity, Column } from 'typeorm'
import { BaseModel } from './abstract/base.entity'

@Entity()
export class AccountType extends BaseModel {
	@Column()
	name: string

	constructor(name: string) {
		super()
		this.name = name
	}
}
