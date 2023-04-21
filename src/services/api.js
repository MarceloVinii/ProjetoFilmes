import axios from "axios"

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=20111756b66df0c47ca7f69127092d14&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})

export default api
