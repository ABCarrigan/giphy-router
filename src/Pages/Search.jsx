import {getSearchedGifs} from '../services/getRequests.js'
import {useState, useEffect} from 'react'
export default function Search() {

    const [searchedGifs, setSearchedGifs] = useState([])
        
    const [userInput, setInputValue] = useState("")

    const onChangeHandler = event => {
      setInputValue(event.target.value);
    };

    useEffect(()=>{
        getSearchedGifs(userInput)
        .then(res => setSearchedGifs(res.data.data))
        .catch((error) => error.message)
    }, [])


    return(
        <div>
            <form method="POST">
                <input type="text" placeholder='Search here!' onChange={onChangeHandler} value={userInput}/>
                <button type="submit">Search</button>
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
  