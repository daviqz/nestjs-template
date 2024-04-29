import { Entity, Column, ManyToMany } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { SubscriptionPlan } from '../subscription-plan/subscription-plan.entity'

@Entity()
export class ProductType extends BaseModel {
	@Column()
	name: string
	@Column()
	description: string

	@ManyToMany(() => SubscriptionPlan, (subscriptionPlan) => subscriptionPlan.productTypes)
	subscriptionPlans: SubscriptionPlan[]

	constructor(name?: string, description?: string) {
		super()
		this.name = name
		this.description = description
	}
}
