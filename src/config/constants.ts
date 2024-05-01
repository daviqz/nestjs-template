export const constants = () => ({
	DATABASE: {
		HOST: process.env.DATABASE_HOST,
		PORT: parseInt(process.env.DATABASE_PORT, 10),
		USERNAME: process.env.DATABASE_USERNAME,
		PASSWORD: process.env.DATABASE_PASSWORD,
		DATABASE: process.env.DATABASE_NAME
	},
	JWT_SECRET: process.env.JWT_SECRET
})
