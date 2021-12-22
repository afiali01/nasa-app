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
        <div className="pictureOfDay">
            <h1>Picture of the Day</h1>
            
            <div className="photoData">
                <h2>{photoData.title}</h2>
                <div className="pic-container">
                    <img src={photoData.url} alt={photoData.title} />
                </div>

                <div className="text-container">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default NasaPicture