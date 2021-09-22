const BASE_API = 'https://pokeapi.co/api/v2/'

export async function getPokemon(id) {
  const response = await fetch(`${BASE_API}pokemon/${id}/`)
  const data = await response.json()
  // TODO: validar errores
  return data
}

export async function getSpecies(id) {
  const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
  const data = await response.json()
  // TODO: validar errores
  return data
}


