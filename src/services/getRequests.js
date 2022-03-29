import axios from "axios"
// our API endpoints below
const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=hFrv7TBbaS6EGxZfl2t7B8WBU9i550Qz`
const TRENDING_URL  = `https://api.giphy.com/v1/gifs/trending?api_key=hFrv7TBbaS6EGxZfl2t7B8WBU9i550Qz`
const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=hFrv7TBbaS6EGxZfl2t7B8WBU9i550Qz&q=`
// Functions we'll use to actually access these endpoints
export function getRandom(){
    const res = axios.get(RANDOM_URL)
    return res
}
export function getTrendingGifs(){
    const res = axios.get(TRENDING_URL)
    return res
}
//q parameter will be our user input in the search view
export function getSearchedGifs(q){
    const res = axios.get(SEARCH_URL+`${q}`)
    return res
}