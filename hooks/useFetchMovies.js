import { useEffect, useState } from 'react'

export function useFetchMovies({ type, page }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)
            const data = await res.json()

            setMovies(data.results)
        }

        fetchMovies()
    }, [type, page])


    return movies
}

