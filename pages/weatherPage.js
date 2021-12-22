import NavBar from "../components/header/header"
import WeatherPage from "../components/marsWeather/weatherPage"

export default function Home() {
    return (
    <div className="container">
        <NavBar/>
        <WeatherPage />
    </div>
    )
}
