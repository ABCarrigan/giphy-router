import {getTrendingGifs} from '../services/getRequests.js'
import {useState, useEffect} from 'react'
export default function Trending() {
    const [trendingGifs, setTrendingGifs] = useState([])
    useEffect(()=>{
        getTrendingGifs()
        .then(res => setTrendingGifs(res.data.data))
        .catch((error) => error.message)
    }, [])

    return(
        <div>
            {console.log(trendingGifs)}
            <h3>Check out some trending gifs!</h3>
            {trendingGifs.map((each, i)=> {
                return(
                        <img key={i} src={each.images.downsized.url} className="trendingGifs"/>
                        )
                })}
            
        </div>
    )
}