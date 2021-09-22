import { setPokemon } from "./pokedex.js"

const $form = document.querySelector('#form')


$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData($form)
  const id = form.get('id')
  setPokemon(id)
}