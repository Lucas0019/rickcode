import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});


// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

// https://rickandmortyapi.com/documentation