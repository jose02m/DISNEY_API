import { Character } from "./Character.model.js";

export async function read() {
  const result = await Character.findAll();
  return result;
}

export async function readByMovie() {
  const result = await Character.findAll({
    include: [{ model: Movie, as: "movie" }],
  });
  return result;
}

export async function insert(characterData) {
  const result = await Character.create(characterData);
  character.addMovie(characterData.movie_id);
  return result;
}

export async function update(characterId, characterData) {
  const result = await Character.update(characterData, {
    where: {
      id: characterId,
    },
  });
  return result;
}

export async function remove(characterId) {
  const result = await Character.destroy({
    where: {
      id: characterId,
    },
  });
  return result;
}
