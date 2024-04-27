import { BaseDTO } from './abstract/base.dto'
import { AccountTypeDTO } from './account-type.dto'

export class AccountDTO extends BaseDTO {
	username: string
	email: string
	accountViewType?: AccountTypeDTO
	organizations?: string[]
	memberships?: string[]
}
