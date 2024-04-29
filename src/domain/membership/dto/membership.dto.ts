import { AccountDTO } from '../../account/dto/account.dto'
import { TeamDTO } from '../../team/dto/team.dto'
import { AccountTypeDTO } from '../../account-type/dto/account-type.dto'

export class MembershipDTO {
	name?: string
	account?: AccountDTO
	team?: TeamDTO
	accountType?: AccountTypeDTO
}
