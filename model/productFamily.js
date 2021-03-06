/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const productFamily = sequelize.define(
    "productFamily",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "familyCategory",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "productFamily",
    }
  );
  return productFamily;
};
