import MoviesSections from "../components/MoviesSections"
import NavBar from "../components/NavBar"
import { ACTION_MOVIES, ACTION_MOVIES_TITLE, CARTOON_MOVIES, CARTOON_MOVIES_TITLE, OTHERS_MOVIES, OTHERS_MOVIES_TITLE } from "../utils/data"


const HomePage = () => {

    return (

        <section className="flex flex-col gap-10 container-margin">

            <MoviesSections title={ACTION_MOVIES_TITLE} movies={ACTION_MOVIES}/>

            <MoviesSections title={CARTOON_MOVIES_TITLE} movies={CARTOON_MOVIES}/>

            <MoviesSections title={OTHERS_MOVIES_TITLE} movies={OTHERS_MOVIES}/>

        </section>

    )
}

export default HomePage