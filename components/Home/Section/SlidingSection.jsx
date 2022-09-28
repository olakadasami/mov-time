import { useFetchMovies } from '../../../hooks/useFetchMovies'

import Slider from '../Slider/Slider'

function SlidingSection({ section }) {

    // fetching movies by their type and page; type includes popular etc
    const movies = useFetchMovies(section.movies)
    console.log("Movies", movies, section.movies.type)

    return (
        <div className="">
            <h2 className="text-lg font-bold capitalize mb-6">
                {section.title}
            </h2>

            <Slider movies={movies} />

        </div>
    )
}

export default SlidingSection