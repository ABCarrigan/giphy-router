import {getRandom} from '../services/getRequests.js'
import {useState, useEffect} from 'react'
export default function Home() {
    function reloadGif(){
        window.location.reload(false)
    }
    const [randomGif, setRandomGif] = useState([])
    useEffect(()=>{
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    },[])
    
    return(
        <div>
            <img src={randomGif}/> <br/>
            <button onClick={reloadGif}>Randomize this gif!</button>
        </div>
    )
}