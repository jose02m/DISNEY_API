import { Movie } from "./Movie.model.js";

export async function read() {
  const result = await Movie.findAll();
  return result;
}

export async function insert(movieData) {
  const result = await Movie.create(movieData);
  return result;
}

export async function update(movieId, movieData) {
  const result = await Movie.update(movieData, {
    where: {
      id: movieId,
    }
  });
  return result;
}

export async function remove(movieId) {
  const result = await Movie.destroy({
    where: {
      id: movieId,
    },
  });
  return result;
}
