import {getSearchedGifs} from '../services/getRequests.js'
import {useState, useEffect} from 'react'
export default function Search() {
    const [searchedGifs, setSearchedGifs] = useState([])
    let userInput = document.querySelector('input')
    useEffect(()=>{
        getSearchedGifs(userInput)
        .then(res => setSearchedGifs(res.data.data))
        .catch((error) => error.message)
    }, [])


    return(
        <div>
            <form>
                <input type="text" placeholder='cats'></input>
                <button id="btnSearch">Search</button>

            </form>
            {searchedGifs.map((each, i)=> {
                return (
                    <img key={i} src={each.images.downsized.url} className="trendingGifs"/>
                )
            })}
        </div>
    )
}

    // const [trendingGifs, setTrendingGifs] = useState([])
    // useEffect(()=>{
    //     getTrendingGifs()
    //     .then(res => setTrendingGifs(res.data.data))
    //     .catch((error) => error.message)
    // }, [])

    // return(
    //     <div>
    //         {console.log(trendingGifs)}
    //         <h3>Check out some trending gifs!</h3>
    //         {searchedGifs.map((each, i)=> {
    //             return(
    //                     <img key={i} src={each.images.downsized.url} className="trendingGifs"/>
    //                     )
    //             })}
            
    //     </div>
  