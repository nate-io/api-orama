'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    googleId: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Role)
  };
  return User;
};