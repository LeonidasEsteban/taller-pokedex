import { getPokemon, getSpecies } from "./api.js"

const $form = document.querySelector('#form')

const $image = document.querySelector('#image')
const $description = document.querySelector('#description')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const form = new FormData($form)
  const id = form.get('id')
  const pokemon = await getPokemon(id)
  const species = await getSpecies(id)
  const description = species.flavor_text_entries.find((flavor) => flavor.language.name === 'es')
  $image.src = pokemon.sprites.front_default
  $description.textContent = description.flavor_text
  // console.log(description)
})