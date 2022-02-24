if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

const app = require('./app');
const { initDatabase } = require('./models');

async function bootstrap() {
	const port = process.env.PORT;

	await initDatabase();
	await app.listen(port);

	console.log(
		`Server listening at port: ${port} in ${process.env.NODE_ENV} mode`
	);
}

bootstrap();
