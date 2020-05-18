'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Financials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marketCap: {
        type: Sequelize.BIGINT
      },
      dividend: {
        type: Sequelize.INTEGER
      },
      ebitda: {
        type: Sequelize.INTEGER
      },
      secFiling: {
        type: Sequelize.STRING
      },
      filingYear: Sequelize.DATE,
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
    return queryInterface.dropTable('Financials');
  }
};