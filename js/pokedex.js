
import { getPokemon, getSpecies } from "./api.js"

const $image = document.querySelector('#image')
function setImage(image) {
  $image.src = image
}

const $description = document.querySelector('#description')
function setDescription(text) {
  $description.textContent = text
}

export async function findPokemon(id) {
  const pokemon = await getPokemon(id)
  const species = await getSpecies(id)
  const description = species.flavor_text_entries.find((flavor) => flavor.language.name === 'es')
  return {
    sprites: pokemon.sprites.front_default,
    description: description.flavor_text,
  }

}

export async function setPokemon(id) {
  const pokemon = await findPokemon(id)
  setImage(pokemon.sprites)
  setDescription(pokemon.description)
}