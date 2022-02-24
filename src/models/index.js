const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const db = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	dbConfig.dialectOptions
);

const models = {
	UserModel: require('./userModel').init(db)
};

for (const key of Object.keys(models)) {
	typeof models[key].defineAssociations === 'function' &&
		models[key].defineAssociations(models);
}

async function initDatabase() {
	await db.authenticate();

	await db.sync({ forceUpdate: process.env.NODE_ENV === 'development' });
}

module.exports = {
	initDatabase,
	db,
	models
};
