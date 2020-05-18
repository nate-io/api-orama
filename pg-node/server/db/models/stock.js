'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: DataTypes.STRING,
    sector: DataTypes.STRING
  }, {});
  Stock.associate = function(models) {
    Stock.hasMany(Financial)
    Stock.hasMany(Price)
    Stock.hasMany(HistoricalPerformance)
  };
  return Stock;
};