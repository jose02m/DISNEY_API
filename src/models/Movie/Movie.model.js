import { DataTypes } from "sequelize";
import sequelize from "../../db/database.js";
import { Character } from "../Character/Character.model.js";

export const Movie = sequelize.define("movie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  creation_date: {
    type: DataTypes.DATE,
  },
  rating: {
    type: DataTypes.BIGINT(1),
  },
});

Movie.belongsToMany(Character, { through: "CharacterMovies" });
Character.belongsToMany(Movie, { through: "CharacterMovies" });
