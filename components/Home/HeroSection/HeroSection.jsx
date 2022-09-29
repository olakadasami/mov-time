import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import HeroMovieCard from './HeroMovieCard'

function HeroSection() {
    // fetching movies popular
    const movies = useFetchMovies({ type: "popular", page: "1" })

    // configuring slider options
    const slider = {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        draggable: false,
        loop: true,
        pauseOnMouseEnter: false
    }

    return (
        <>
            <Slider slider={slider} movies={movies} component={HeroMovieCard} />
        </>
    )
}

export default HeroSection