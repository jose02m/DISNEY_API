import * as characterOps from "../../models/Character/character.ops.js";

export async function getCharacters(req, res) {
  const result = await characterOps.read();
  res.json(result);
}

export async function getCharactersByMovie(req, res) {
  const result = await characterOps.readByMovie();
  res.json(result);
}

export async function createCharacter(req, res, next) {
  try {
    const characterData = { ...req.body };
    const result = await characterOps.insert(characterData);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}

export async function updateCharacter(req, res, next) {
  try {
    const { id } = req.params;
    const characterData = { ...req.body };
    const result = await characterOps.update(id, characterData);
    
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function deleteCharacter  (req, res, next) {
  try {
    const { id } = req.params;
    const result = await characterOps.remove(id);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
