module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "ProductFamily",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(12),
          allowNull: false,
        },
        FamilyCategoryId: {
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
  