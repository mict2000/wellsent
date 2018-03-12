module.exports = function(sequelize, DataTypes) {
	var MessagePool = sequelize.define("MessagePool", {
		key: DataTypes.STRING
	});

	MessagePool.associate = function(models) {
		MessagePool.belongsToMany(models.User, { 
			through: {
        		model: models.UserPoolJunction
      		}
		});
	};

	return MessagePool;
}