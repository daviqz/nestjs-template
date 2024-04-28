import { BaseDTO } from '../../../common/base.dto'
import { AccountTypeDTO } from '../../account-type/account-type.dto'

export class AccountDTO extends BaseDTO {
	username: string
	email: string
	accountViewType?: AccountTypeDTO
	organizations?: string[]
	memberships?: string[]
}
