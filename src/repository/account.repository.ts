import { Injectable } from '@nestjs/common'
import { EntityManager, MikroORM } from '@mikro-orm/postgresql'

@Injectable()
export class AccountRepository {
	constructor(
		private readonly orm: MikroORM,
		private readonly em: EntityManager
	) {}

	loginAccount(): string {
		return 'Hello World!'
	}

	registerAccount(): string {
		// const author = new Author('Jon Snow', 'snow@wall.st')
		// author.born = new Date()

		// const publisher = new Publisher('7K publisher')

		// const book1 = new Book('My Life on The Wall, part 1', author)
		// book1.publisher = publisher
		// const book2 = new Book('My Life on The Wall, part 2', author)
		// book2.publisher = publisher
		// const book3 = new Book('My Life on The Wall, part 3', author)
		// book3.publisher = publisher

		// // just persist books, author and publisher will be automatically cascade persisted
		// await em.persist([book1, book2, book3]).flush()
		return ''
	}
}
