'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HistoricalPerformances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      priceDate: {
        type: Sequelize.DATE
      },
      open: {
        type: Sequelize.INTEGER
      },
      high: {
        type: Sequelize.INTEGER
      },
      low: {
        type: Sequelize.INTEGER
      },
      close: {
        type: Sequelize.INTEGER
      },
      volume: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HistoricalPerformances');
  }
};