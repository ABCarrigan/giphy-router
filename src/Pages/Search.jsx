import {searchGif} from '../services/getRequests.js'
import {useState, useEffect} from 'react'
export default function Search() {
  

    return(
        <div>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"></img>
            <form>
                <input type="text"></input>
                <button id="btnSearch">Search</button>
            </form>
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
    //         {trendingGifs.map((each, i)=> {
    //             return(
    //                     <img key={i} src={each.images.downsized.url} className="trendingGifs"/>
    //                     )
    //             })}
            
    //     </div>
  