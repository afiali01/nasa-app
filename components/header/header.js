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
                        <Link href="/home">
                            <a>other link</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;