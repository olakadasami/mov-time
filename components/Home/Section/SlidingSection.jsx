import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'
import MovieCardBig from '../MovieCard/MovieCardBig'
import spinner from '../../../assets/Icons/spinner.svg'
import Image from 'next/image'

function SlidingSection({ section }) {
    // destructure the hook & fetching movies by their type and page; type includes popular etc
    const { error, isLoading, movies } = useFetchMovies(section.movies)

    // swiper breakpoints for the sliding components
    const breakpoints = {
        1900: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 5,
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
            slidesPerView: 3,
            spaceBetween: 20,
        },
        476: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
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

            {error && <div>Error fetching data, check network connection and reload</div>}

            {isLoading && <div className='grid h-full place-items-center'>
                <Image src={spinner} alt='loading image' />
            </div>
            }

            {!error && !isLoading && <Slider slider={slider} movies={movies} component={MovieCardBig} />}
        </div>
    )
}

export default SlidingSection