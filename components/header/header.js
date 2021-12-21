import Link from "next/link";

const NavBar = function(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/weatherPage">
                            <a>Mars Weather</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/picOfDayPage">
                            <a>Picture of the Day</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;