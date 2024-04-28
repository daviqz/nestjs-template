import { Entity, Column, ManyToMany, JoinTable } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Account } from '../account/account.entity'

@Entity()
export class Team extends BaseModel {
	@Column()
	name: string

	@ManyToMany(() => Account)
	@JoinTable()
	accounts: Account[]

	constructor(name: string) {
		super()
		this.name = name
	}
}
