'use strict';
module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    lastTradedPrice: DataTypes.INTEGER
  }, {});
  Price.associate = function(models) {
    // associations can be defined here
  };
  return Price;
};