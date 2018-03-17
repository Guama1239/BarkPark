// create/define the User table within the BarkPark_db

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      dog_name: DataTypes.STRING,
      dog_type: DataTypes.STRING,
      dog_color: DataTypes.STRING,
      dog_weight: DataTypes.INTEGER,
      dog_rating: DataTypes.INTEGER // not sure about this one...
    });
    return User;
  };