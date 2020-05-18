'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoricalPerformance = sequelize.define('HistoricalPerformance', {
    priceDate: DataTypes.DATE,
    open: DataTypes.INTEGER,
    high: DataTypes.INTEGER,
    low: DataTypes.INTEGER,
    close: DataTypes.INTEGER,
    volume: DataTypes.BIGINT
  }, {});
  HistoricalPerformance.associate = function(models) {
    // associations can be defined here
  };
  return HistoricalPerformance;
};