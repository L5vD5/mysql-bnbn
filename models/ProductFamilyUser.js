module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "ProductFamilyUser",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        ProductFamilyId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.literal("now()"),
        },
      },
      {
        timestamps: false,
      }
    );
  };
  