import { ProductTypeDTO } from 'src/domain/product-type/dto/product-type.dto'

export class MembershipDTO {
	name?: string
	description?: string
	productTypes?: ProductTypeDTO[]
}
