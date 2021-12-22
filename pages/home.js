import NavBar from "../components/header/header"
import NasaPicture from "../components/picOfDay/nasaPicture"
const HomePage = function (){
    return (
        <div className="container">
            <NavBar/>
            <div className="welcome">
                <div>
                    <h1>Welcome to NASA App</h1>
                    <p>This app is designed to display NASA information such as Mar's weather update, picture of the day and many more.</p>
                </div>

                <NasaPicture/>
            </div>
        </div>
    )
}

export default HomePage