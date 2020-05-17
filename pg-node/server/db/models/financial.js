'use strict';
module.exports = (sequelize, DataTypes) => {
  const Financial = sequelize.define('Financial', {
    marketCap: DataTypes.BIGINT,
    dividend: DataTypes.INTEGER,
    ebitda: DataTypes.INTEGER,
    secFiling: DataTypes.STRING,
    filingYear: Sequelize.DATE
  }, {});
  Financial.associate = function(models) {
    // associations can be defined here
  };
  return Financial;
};