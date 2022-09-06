import { DataTypes } from "sequelize";
import sequelize from "../../db/database.js";

export const Character = sequelize.define("character", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  history: {
    type: DataTypes.STRING,
  },
});
