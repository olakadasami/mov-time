import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    return await res.json()
}

export function useFetchMovies({ type, page }) {
    const moviesURL = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`

    const { data, isLoading, error } = useSWR(moviesURL, fetcher)

    return {
        isLoading: isLoading,
        error: error,
        movies: data?.results
    }
}

// export function useFetchMovies({ type, page }) {

//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(null)
//     const [movies, setMovies] = useState([])

//     const moviesURL = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`

//     useEffect(() => {
//         const fetchMovies = async () => {

//             setError(null)
//             setIsLoading(true)

//             const res = await fetch(moviesURL)
//             const data = await res.json()

//             if (!res.ok) {
//                 setIsLoading(false)
//                 setError(data.error)
//             }
//             if (res.ok) {
//                 setIsLoading(false)
//                 setError(null)
//                 setMovies(data.results)
//             }

//         }

//         fetchMovies()

//     }, [moviesURL])
//     //


//     return {
//         isLoading: isLoading,
//         error: error,
//         movies: movies
//     }
// }

