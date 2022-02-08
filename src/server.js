const app = require('./app');

if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

async function bootstrap() {
	const port = process.env.PORT;
	await app.listen(port);

	console.log(
		`Server listening at port: ${port} in ${process.env.NODE_ENV} mode`
	);
}

bootstrap();
