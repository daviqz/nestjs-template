import { AccountDTO } from '../../account/dto/account.dto'
import { TeamDTO } from '../../team/dto/team.dto'
import { ProductTypeDTO } from '../../product-type/dto/product-type.dto'

export class OrganizationDTO {
	name?: string
	productType?: ProductTypeDTO
	createdBy?: AccountDTO
	accounts?: AccountDTO[]
	teams?: TeamDTO[]
}
