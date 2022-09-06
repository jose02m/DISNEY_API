import { Router } from "express";
import * as movieController from "./movie.controller.js";

const movie = Router();

movie.get('/', movieController.getMovies);
movie.post('/', movieController.createMovie);
movie.put('/:id', movieController.updateMovie);
movie.delete('/:id', movieController.deleteMovie);

export default movie;
