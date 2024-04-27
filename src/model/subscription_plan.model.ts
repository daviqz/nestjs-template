import { Entity, Column, ManyToMany, JoinTable } from 'typeorm'
import { ProductType } from './product_type.model'
import { BaseModel } from './abstract/base.model'

@Entity()
export class SubscriptionPlan extends BaseModel {
	@Column()
	name: string

	@Column()
	description: string

	@ManyToMany(() => ProductType)
	@JoinTable()
	productType: ProductType[]

	constructor(name: string, description: string, productType: ProductType[]) {
		super()
		this.name = name
		this.description = description
		this.productType = productType
	}
}
