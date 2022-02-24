module.exports = {
	database: process.env.DB_DATABASE_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	dialectOptions: {
		dialect: 'postgres',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT
	}
};
