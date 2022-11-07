import axios from "axios"

export const api = axios.create({
   baseURL: "https://pro-support.herokuapp.com",
})
