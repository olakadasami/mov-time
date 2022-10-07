// import Swiper core and required modules
import { Autoplay, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


function Slider({ movies, slider, component: Component }) {

    return (
        <>
            {movies?.length > 0 ?
                <Swiper
                    // install Swiper modules
                    modules={[A11y, Autoplay, EffectFade]}
                    spaceBetween={slider.spaceBetween}
                    slidesPerView={slider.slidesPerView}
                    autoplay={{
                        delay: slider.autoplay.delay,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: slider.pauseOnMouseEnter
                    }}
                    effect={slider.effect}
                    fadeEffect={{
                        crossFade: true
                    }}
                    breakpoints={slider.breakpoints}
                    speed={3000}
                    reverseDirection={false}
                    loop={slider.loop}
                    scrollbar={{ draggable: slider.draggable }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                    wrapperTag='ul'
                    tag='section'
                >
                    {movies.map(movie => (
                        <SwiperSlide tag='li' className="overflow-hidden" key={movie.id}>
                            <Component movie_id={movie.id} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                : <h2>Error fetching movies</h2>
            }
        </>
    )
}

export default Slider