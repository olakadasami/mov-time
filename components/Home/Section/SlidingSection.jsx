import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import MovieCardBig from '../MovieCard/MovieCardBig'

function SlidingSection({ section }) {

    // fetching movies by their type and page; type includes popular etc
    const movies = useFetchMovies(section.movies)
    console.log("Movies", movies, section.movies.type)

    // configuring slider options
    const slider = {
        spaceBetween: 100,
        slidesPerView: 3,
        autoplay: {
            delay: 5000
        },
        draggable: true,
        loop: true,
        pauseOnMouseEnter: true

    }

    return (
        <div className="">
            <h2 className="text-lg font-bold capitalize mb-6">
                {section.title}
            </h2>

            <Slider slider={slider} movies={movies} component={MovieCardBig} />

        </div>
    )
}

export default SlidingSection