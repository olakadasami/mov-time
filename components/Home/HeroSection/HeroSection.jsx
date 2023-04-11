import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import HeroMovieCard from './HeroMovieCard'
import spinner from '../../../assets/Icons/spinner.svg'


function HeroSection() {
    // destructuring the hook & fetching movies popular
    const { error, isLoading, movies } = useFetchMovies({ type: "popular", page: "1" })

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

    if (isLoading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>Error fetching data</div>
    }

    if (!isLoading && !error) {
        return <Slider slider={slider} movies={movies} component={HeroMovieCard} />
    }

}

export default HeroSection
