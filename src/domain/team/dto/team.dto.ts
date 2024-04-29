import { MembershipDTO } from '../../membership/dto/membership.dto'
import { OrganizationDTO } from '../../organization/dto/organization.dto'

export class TeamDTO {
	name?: string
	memberships?: MembershipDTO[]
	createdBy?: OrganizationDTO
}
