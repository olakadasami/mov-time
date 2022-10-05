import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import HeroMovieCard from './HeroMovieCard'

function HeroSection() {
    // fetching movies popular
    const movies = useFetchMovies({ type: "popular", page: "1" })

    // configuring slider options
    const slider = {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 6000
        },
        draggable: false,
        loop: true,
        pauseOnMouseEnter: false,
        effect: "fade",
        breakpoints: null
    }

    return (
        <>
            <Slider slider={slider} movies={movies} component={HeroMovieCard} />
        </>
    )
}

export default HeroSection