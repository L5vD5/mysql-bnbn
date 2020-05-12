module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "Company",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        companyname: {
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
  