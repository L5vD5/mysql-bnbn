/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setting', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'setting'
  });
};
