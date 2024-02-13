import { API_URL } from "./settings";

export const getPokemons = async () => {
  try {
    const response = await fetch(`${API_URL}/pokemons/all`);
    if (!response.ok) {
      throw new Error("Hubo un problema al realizar la solicitud.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};

export const postPokemon = async () => {
  try {
    const response = await fetch(`${API_URL}/create`);
    if (response.ok) {
      throw new Error("Hubo un problema al intentar crear el pokemon.");
    }
  } catch (error) {
    console.log("Error al crear Pokemon:", error);
  }
};
