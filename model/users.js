/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    crNumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    salt: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'users'
  });
  return users 
};
