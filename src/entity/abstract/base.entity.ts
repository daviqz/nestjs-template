import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

export abstract class BaseModel {
	@PrimaryGeneratedColumn()
	id!: number

	@CreateDateColumn({ name: 'created_at' })
	createdAt = new Date()

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt = new Date()

	@DeleteDateColumn({ name: 'deleted_at' })
	deletedAt?: Date
}
