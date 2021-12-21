import { useState, useEffect } from "react";
import dataFetcher from "../data/dataFetcher";

const NasaPicture = function(){
    const [photoData, setPhotoData] = useState()
    
    useEffect( async ()=>{
        const data = await dataFetcher('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        
        setPhotoData(data);
    }, [])

    if(!photoData) return <div/>

    return(
        <div>
            <h1>Picture of the Day</h1>
            <div>
                <h2>{photoData.title}</h2>
                <img src={photoData.url} alt={photoData.title} />
            </div>
        </div>
    )
}

export default NasaPicture