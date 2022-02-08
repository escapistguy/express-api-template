const app = require('./app');

async function bootstrap() {
	const port = process.env.PORT || 8000;
	await app.listen(port);

	console.log(
		`Server listening at port: ${port} in ${process.env.NODE_ENV} mode`
	);
}

bootstrap();
