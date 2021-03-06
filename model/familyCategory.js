/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const familyCategory = sequelize.define(
    "familyCategory",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "0",
      },
    },
    {
      timestamps: false,
      tableName: "familyCategory",
    }
  );
  return familyCategory;
};
