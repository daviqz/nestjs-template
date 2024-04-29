import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { BaseModel } from '../../common/base.entity'
import { Membership } from '../membership/membership.entity'
import { Organization } from '../organization/organization.entity'

@Entity()
export class Team extends BaseModel {
	@Column()
	name: string

	@OneToMany(() => Membership, (membership) => membership.team)
	memberships: Membership[]

	@ManyToOne(() => Organization)
	@JoinColumn({ name: 'organization_id' })
	organization: Organization

	constructor(name?: string, memberships?: Membership[], organization?: Organization) {
		super()
		this.name = name
		this.memberships = memberships
		this.organization = organization
	}
}
