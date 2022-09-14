const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "RecipeDiet",
    {},
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
