const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
      img: {
        type: DataTypes.STRING,
        defaultValue:
          "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
      },
      instructions: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [],
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
