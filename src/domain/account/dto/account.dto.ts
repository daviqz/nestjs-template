import { OrganizationDTO } from 'src/domain/organization/dto/organization.dto'
import { BaseDTO } from '../../../common/base.dto'
import { AccountTypeDTO } from '../../account-type/dto/account-type.dto'
import { MembershipDTO } from 'src/domain/membership/dto/membership.dto'

export class AccountDTO extends BaseDTO {
	username?: string
	email?: string
	accountViewType?: AccountTypeDTO
	organizations?: OrganizationDTO[]
	memberships?: MembershipDTO[]
}
