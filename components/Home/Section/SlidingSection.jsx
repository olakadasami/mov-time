import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import MovieCardBig from '../MovieCard/MovieCardBig'

function SlidingSection({ section }) {

    // fetching movies by their type and page; type includes popular etc
    const movies = useFetchMovies(section.movies)
    console.log("Movies", movies, section.movies.type)

    const breakpoints = {
        1900: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // 1200: {
        //   slidesPerView: 4,
        //   spaceBetween: 20,
        // },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        476: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    }

    // configuring slider options
    const slider = {
        spaceBetween: 100,
        slidesPerView: 3,
        autoplay: {
            delay: 5000
        },
        draggable: true,
        loop: true,
        pauseOnMouseEnter: true,
        effect: "",
        breakpoints: breakpoints
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