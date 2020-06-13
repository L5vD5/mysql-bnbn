/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const productFamily_user = sequelize.define(
    "productFamily_user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      family_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0",
        references: {
          model: "productFamily",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      timestamps: false,

      tableName: "productFamily_user",
    }
  );
  return productFamily_user;
};
