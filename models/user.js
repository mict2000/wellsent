var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING, 
      //primaryKey: false  //TODO: remove this line and uncomment the one below, Its giving me sequelize error on my system 
      primaryKey: true
    },
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.belongsToMany(models.MessagePool, { 
      through: {
        model: models.UserPoolJunction
      }
    });
  }

  User.prototype.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
  };
  User.hook("beforeCreate", function(user){
    user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10), null);
  });
  return User;
}