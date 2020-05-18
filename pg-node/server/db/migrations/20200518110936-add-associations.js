'use strict';

/**
 * Add associations to tables post table creation 
 * Promise based so wrap each subsequent block in then()
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    // User hasOne Role
    return queryInterface.addColumn(
      'Users',
      'roleFK',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    // remove User hasOne Role
    return queryInterface.removeColumn(
      'Users',
      'roleFK'
    )
  }
}
