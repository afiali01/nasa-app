import dataFetcher from "../data/dataFetcher";
import { useState, useEffect } from "react";


const WeatherPage = function(){
    const [weatherData, setWeatherData] = useState(null)

    useEffect(async() => {
        const data = await dataFetcher('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
        setWeatherData(data)
        console.log(data)
    }, [])
    return(
        <div className="weatherPage">
            <h1>Welcome to weather Page</h1>
            <div>
                <ul>
                    <li>Mid Summer</li>
                </ul>
            </div>
        </div>
    );
}

export default WeatherPage