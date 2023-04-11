import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    return await res.json()
}

export function useFetchSingleMovie(movie_id) {
    const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`

    const { data, isLoading, error } = useSWR(movieURL, fetcher)

    return {
        isLoading: isLoading,
        error: error,
        movie: data
    }
}

// export function useFetchSingleMovie(movie_id) {

//     const [error, setError] = useState(null)
//     const [isLoading, setIsLoading] = useState(null)
//     const [movie, setMovie] = useState([])

//     const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`

//     useEffect(() => {
//         const fetchSingleMovie = async () => {
//             setError(null)
//             setIsLoading(true)

//             const res = await fetch(movieURL)
//             const data = await res.json()

//             if (!res.ok) {
//                 setIsLoading(false)
//                 setError(data.error)
//             }
//             if (res.ok) {
//                 setIsLoading(false)
//                 setError(null)
//                 setMovie(data)
//             }
//         }

//         fetchSingleMovie()

//     }, [movieURL])


//     return {
//         error: error,
//         isLoading: isLoading,
//         movie: movie
//     }
// }