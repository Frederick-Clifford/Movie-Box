import MovieCard from "./MovieCard"

import PropTypes from "prop-types"

const MoviesSections = ({title, movies}) => {

    return(

        <div className="flex flex-col gap-3 p-px mx-1 md:mx-0">

            <h1 className="title-text bg-primary-color pl-2 rounded-tr-lg mr-1">
                {title}
            </h1>

            <div className="flex flex-col items-center xs:items-start">

                <div className="p-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xs:gap-1.5 ss:gap-3 md:gap-2 lg:gap-4">

                    {movies.map((movie, index) =>
            
                        <MovieCard key={index} {...movie} />
                    )}

                </div>

            </div>

        </div>
    )
}

MoviesSections.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.array
}

MoviesSections.defaultProps = {
    title: "Unknown",
    movies: []
}

export default MoviesSections