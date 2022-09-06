import * as movieOps from "../../models/Movie/movie.ops.js";

export async function getMovies(req, res) {
  const result = await movieOps.read();
  res.json(result);
}

export async function createMovie(req, res, next) {
  try {
    const movieData = { ...req.body };
    const result = await movieOps.insert(movieData);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}

export async function updateMovie(req, res, next) {
  try {
    const { id } = req.params;
    const movieData = { ...req.body };
    const result = await movieOps.update(id, movieData);
    
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function deleteMovie(req, res, next) {
  try {
    const { id } = req.params;
    const result = await movieOps.remove(id);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
