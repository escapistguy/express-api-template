const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true
				},
				username: {
					type: DataTypes.STRING,
					allowNull: false
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false
				},
				password: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{ sequelize }
		);
	}

	static defineAssociations() {}
}

module.exports = UserModel;
