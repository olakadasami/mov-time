// import Swiper core and required modules
import { Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import MovieCardBig from '../MovieCard/MovieCardBig';

function Slider({ movies }) {
    return (
        <>
            {movies?.length > 0 ?
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={3}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    wrapperTag='ul'
                >
                    {movies.map(movie => (
                        <SwiperSlide tag='li' key={movie.id}>
                            <MovieCardBig movie_id={movie.id} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                : <h2>No movies</h2>
            }
        </>
    )
}

export default Slider