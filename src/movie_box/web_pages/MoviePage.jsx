import PropTypes from "prop-types"

import downloadIcon from "../../assets/svg_icons/ic_download.svg"
import playIcon from "../../assets/svg_icons/ic_play.svg"

import { useParams } from "react-router-dom"

import { ACTION_MOVIES, ACTION_MOVIE_CATEGORY, CARTOON_MOVIES, CARTOON_MOVIE_CATEGORY, MOVIE_FIRST_BUTTON_TEXT, MOVIE_SECOND_BUTTON_TEXT, OTHERS_MOVIES, OTHERS_MOVIE_CATEGORY, UNKNOWN_ID } from "../utils/data"

import ErrorPage from "./ErrorPage"

const MovieDescription = ({ description }) => {

    return(

        <div className="movie-description-background">

            {description.map((item, index) =>
            
                <p className="description-text"
                    key={index}>
                    {item}
                </p>
            )}
                    
        </div>
    )
}

MovieDescription.propTypes = {
    description: PropTypes.array
}

MovieDescription.defaultProps = {
    description: []
}







const Movie = ({ movie }) => {

    return(

        <section className="flex flex-col ss:flex-row gap-2 container-margin mx-1 md:mx-0 px-2">

            <div className="flex-[4] sm:flex-[3] self-center xs:self-start items-center xs:items-start justify-center flex flex-col gap-px p-1">

                <img className="movie-image"
                    src={movie.image}
                    alt={movie.title} />

                <h1 className="title-text">
                    {movie.title}
                </h1>

                <p className="description-text">
                    {movie.releaseDate}
                </p>

                <div className="p-px items-center xs:items-start justify-between flex gap-1 w-full">

                    <button className="primary-button"
                        type="button">
                            
                        <img className="button-icon"
                            src={playIcon}
                            alt={MOVIE_FIRST_BUTTON_TEXT} />

                        {MOVIE_FIRST_BUTTON_TEXT}
                    </button>

                    <button className="secondary-button p-0">

                    <a className="secondary-button"
                        href={movie.image}
                        download
                        type="button">
                                
                        <img className="button-icon"
                            src={downloadIcon}
                            alt={MOVIE_SECOND_BUTTON_TEXT} />

                        {MOVIE_SECOND_BUTTON_TEXT}
                    </a>
                    </button>
                </div>

            </div>

            <MovieDescription description={movie.description} />
        
        </section>
    )
}

Movie.proptypes = {
    movie: PropTypes.object
}

Movie.defaultProps = {
    movie: {}
}

















const MoviePage = () => {

    const { movieCategory, movieId } = useParams()

    let movies = []

    let selectedMovie = {id: UNKNOWN_ID}

    if (movieCategory === ACTION_MOVIE_CATEGORY) {

        movies = ACTION_MOVIES
    } else if (movieCategory === CARTOON_MOVIE_CATEGORY) {

        movies = CARTOON_MOVIES
    } else if (movieCategory === OTHERS_MOVIE_CATEGORY) {

        movies = OTHERS_MOVIES
    }

    for (let movie of movies) {

        if (movie.id === movieId){

            selectedMovie = movie
            break
        }
    }

    if (selectedMovie.id === UNKNOWN_ID) {
        
        return(<ErrorPage />)
    } else {
        
        return (<Movie movie={selectedMovie} />)
    }
}

export default MoviePage