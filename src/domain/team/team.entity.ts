import { Entity, Column, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Membership } from '../membership/membership.entity'
import { Organization } from '../organization/organization.entity'

@Entity()
export class Team extends BaseModel {
	@Column()
	name: string

	@ManyToMany(() => Membership)
	@JoinTable()
	memberships: Membership[]

	@ManyToOne(() => Organization)
	@JoinColumn({ name: 'created_by_organization_id' })
	createdBy: Organization

	constructor(name?: string, memberships?: Membership[], createdBy?: Organization) {
		super()
		this.name = name
		this.memberships = memberships
		this.createdBy = createdBy
	}
}
