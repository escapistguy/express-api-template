const { Router } = require('express');

const userRoutes = Router();

const {
	createUser,
	getUser,
	updateUser,
	deleteUser,
	findUsers
} = require('../controllers/userControllers');

userRoutes.post('/', createUser);
userRoutes.get('/', getUser);
userRoutes.put('/', updateUser);
userRoutes.delete('/', deleteUser);
userRoutes.get('/find', findUsers);

module.exports = userRoutes;
