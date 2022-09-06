import { Router } from "express";
import * as characterController from "./character.controller.js";

const character = Router();

character.get('/', characterController.getCharacters);
character.get('/movies', characterController.getCharactersByMovie);
character.post('/', characterController.createCharacter);
character.put('/:id', characterController.updateCharacter);
character.delete('/:id', characterController.deleteCharacter);

export default character;
