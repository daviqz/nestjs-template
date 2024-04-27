import { Entity, Column, ManyToMany, JoinTable } from 'typeorm'
import { BaseModel } from './abstract/base.model'
import { Account } from './account.model'

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
