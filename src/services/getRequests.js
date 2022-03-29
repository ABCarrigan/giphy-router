import axios from "axios"
const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=hFrv7TBbaS6EGxZfl2t7B8WBU9i550Qz`
export function getRandom(){
    const res = axios.get(RANDOM_URL)
    return res
}