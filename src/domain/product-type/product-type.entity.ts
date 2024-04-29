import { Entity, Column } from 'typeorm'
import { BaseModel } from '../../common/base.entity'

@Entity()
export class ProductType extends BaseModel {
	@Column()
	name: string
	@Column()
	description: string

	constructor(name?: string, description?: string) {
		super()
		this.name = name
		this.description = description
	}
}
