import movieIcon from "../../assets/svg_icons/ic_movie_white.svg"

import { NAV_BAR_TITLE } from "../utils/data"

const NavBar = () => (
        
    <nav className="z-50 flex justify-start items-center gap-2 md:gap-3 p-2 fixed inset-x-0 top-0 bg-nav-bar-color nav-bar">

            <img className="nav-bar-icon"
                src={movieIcon}
                alt="movie box" />

            <h1 className="nav-bar-text">
                {NAV_BAR_TITLE}
            </h1>

    </nav>
)

export default NavBar