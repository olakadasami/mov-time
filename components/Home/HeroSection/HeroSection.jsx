import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import HeroMovieCard from './HeroMovieCard'
import spinner from '../../../assets/Icons/spinner.svg'
import Image from 'next/image'


function HeroSection({ initialData }) {
    // destructuring the hook & fetching movies popular
    const { error, isLoading, movies } = useFetchMovies({ type: "popular", page: "1", initialData })

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
        breakpoints: null,
        speed: 10000
    }

    if (isLoading) {
        return <div className='grid h-full place-items-center'>
            <Image src={spinner} alt='loading image' />
        </div>
    }

    if (error) {
        return <div>Error fetching data, check network connection and reload</div>
    }

    if (!isLoading && !error) {
        return <Slider slider={slider} movies={movies} component={HeroMovieCard} />
    }

}

export default HeroSection
