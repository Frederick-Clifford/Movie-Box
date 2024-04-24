import PropTypes from "prop-types"

import { Link } from "react-router-dom"

const MovieCard = ({id, category, image, title, description, releaseDate}) => {

    return(

        <Link className="rounded-2xl"
            to={`/movie/${category}/${id}`}
            reloadDocument>

            <div className="movie-card group">

                <div className="relative border-[1px] border-white movie-card-top-radius">

                    <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-20 bg-black movie-card-top-radius"></div>

                    <img className="movie-card-image"
                        src={image}
                        alt={title} />

                </div>

                <div className="border-[1px] border-white movie-card-bottom-radius">

                    <h1 className="sub-title-text pl-2 movie-card-text-background">
                        {title}
                    </h1>

                    <p className="description-text pl-2 mb-1 movie-card-text-background movie-card-bottom-radius">
                        {releaseDate}
                    </p>

                </div>

            </div>

        </Link>
    )
}

MovieCard.propTypes = {
    id: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.array,
    releaseDate: PropTypes.string,
}

MovieCard.defaultProps = {
    id: "Unknown",
    category: "Unknown",
    image: "Unknown",
    title: "Unknown",
    description: [],
    releaseDate: "Unknown",
}

export default MovieCard