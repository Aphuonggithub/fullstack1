"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinics.init(
    {
      // id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "Clinics",
    }
  );
  return Clinics;
};
