module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "Category",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        categoryname: {
          type: DataTypes.STRING(12),
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
  