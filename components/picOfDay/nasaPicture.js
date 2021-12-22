import { useState, useEffect } from "react";
import dataFetcher from "../data/dataFetcher";
import React from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPicture = function(){
    const [photoData, setPhotoData] = useState()
    
    useEffect( async ()=>{
        const data = await dataFetcher('https://api.nasa.gov/planetary/apod?api_key=AiCF4GoXK2qYNtpamacawuDY1syFx0KmNSuq5kKr');
        setPhotoData(data);
    }, [])

    if(!photoData) return <div/>

    return(
        <div className="pictureOfDay">
            <h1>Picture of the Day</h1>
            <div className="photoData">
                
                <div className="pic-container">
                    <img src={photoData.url} alt={photoData.title} />
                </div>

                <div className="text-container">
                    <h2>{photoData.title}</h2>
                    <p>{photoData.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default NasaPicture