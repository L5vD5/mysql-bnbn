import {Company} from "./Company"
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      CompanyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      productname: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      price: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("now()"),
      },
      image_1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      iamge_2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image_3: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image_4: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image_5: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );  

  return Product
  };
  