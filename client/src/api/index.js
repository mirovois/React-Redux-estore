import axios from 'axios'

const URL = 'http://localhost:5000/items'

export const getItems = () => axios.get(URL)