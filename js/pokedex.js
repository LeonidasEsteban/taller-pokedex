
import { getPokemon, getSpecies } from "./api.js"

const $image = document.querySelector('#image')
export function setImage(image) {
  $image.src = image
}

const $description = document.querySelector('#description')
function setDescription(text) {
  $description.textContent = text
}

const $screen = document.querySelector('#screen')
function loader(isLoading = false) {
  const img = isLoading ? 'url(./images/loading.gif)': ''
  $screen.style.backgroundImage = img
}

export async function findPokemon(id) {
  const pokemon = await getPokemon(id)
  const species = await getSpecies(id)
  const description = species.flavor_text_entries.find((flavor) => flavor.language.name === 'es')
  const sprites = [pokemon.sprites.front_default]
  for (const item in pokemon.sprites) {
    if (item !== 'front_default' && item !== 'other' && item !== 'versions' && pokemon.sprites[item]) {
      sprites.push(pokemon.sprites[item])
    }
  }
  console.log(sprites)
  return {
    sprites,
    description: description.flavor_text,
    id: pokemon.id
  }

}

export async function setPokemon(id) {
  // prender loader
  loader(true)
  const pokemon = await findPokemon(id)
  loader(false)
  // apagar loader

  setImage(pokemon.sprites[0])
  setDescription(pokemon.description)
  return pokemon
}