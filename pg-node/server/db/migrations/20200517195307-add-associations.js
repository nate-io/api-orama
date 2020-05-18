'use strict';

/**
 * Add associations to tables post table creation 
 * Promise based so wrap each subsequent block in then()
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Stocks hasMany Financials
    return queryInterface.addColumn(
      'Financials',    // target
      'symbolFK',  // new column name
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Stocks', // source
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
    )
    // Stock hasMany Prices
    .then(() => {
      return queryInterface.addColumn(
        'Prices',
        'symbolFK',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Stocks',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      )
      // Stock hasMany HistoricalPerformances
      .then(() => {
        return queryInterface.addColumn(
          'HistoricalPerformances',
          'symbolFK',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Stocks',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }
        )
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    // remove Stock hasMany Financial
    return queryInterface.removeColumn(
      'Financials',   // target table
      'symbolFK'      // target field
    )
    .then(() => {
      return queryInterface.removeColumn(
        'Prices',
        'symbolFK'
      )
    })
    .then(() => {
      return queryInterface.removeColumn(
        'HistoricalPerformances',
        'symbolFK'
      )
    })
  }
};
