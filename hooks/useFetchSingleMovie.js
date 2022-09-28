import { useEffect, useState } from 'react'

export function useFetchSingleMovie({ movie_id }) {

    const [movie, setMovie] = useState([])
    const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(movieURL)
            const data = await res.json()

            setMovie(data)
        }

        fetchMovie()
    }, [movieURL])


    return movie
}

