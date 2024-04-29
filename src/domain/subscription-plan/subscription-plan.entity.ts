import { Entity, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm'
import { ProductType } from '../product-type/product-type.entity'
import { BaseModel } from '../../common/base.entity'

@Entity()
export class SubscriptionPlan extends BaseModel {
	@Column()
	name: string

	@Column()
	description: string

	@ManyToMany(() => ProductType)
	@JoinTable()
	productTypes: ProductType[]

	constructor(name?: string, description?: string, productTypes?: ProductType[]) {
		super()
		this.name = name
		this.description = description
		this.productTypes = productTypes
	}
}
