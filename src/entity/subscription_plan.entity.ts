import { Entity, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm'
import { ProductType } from './product_type.entity'
import { BaseModel } from './abstract/base.entity'

@Entity()
export class SubscriptionPlan extends BaseModel {
	@Column()
	name: string

	@Column()
	description: string

	@ManyToMany(() => ProductType)
	@JoinColumn({ name: 'product_type' })
	@JoinTable()
	productType: ProductType[]

	constructor(name: string, description: string, productType: ProductType[]) {
		super()
		this.name = name
		this.description = description
		this.productType = productType
	}
}
