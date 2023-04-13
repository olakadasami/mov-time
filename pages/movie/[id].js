import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect } from "react"
import { FaShare, FaVideo, FaPlus } from 'react-icons/fa'

export const getStaticPaths = async () => {
    const type = "popular"
    const page = 1
    const moviesURL = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`

    const res = await fetch(moviesURL)
    const data = await res.json()

    const paths = data.results.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const movie_id = context.params.id
    const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`

    const res = await fetch(movieURL)
    const data = await res.json()

    return {
        props: { movie: data }
    }
}

const MovieItem = ({ movie }) => {
    const bgImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const videoURI = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.API_KEY}&language=en-US`

    return (
        <>
            <Head>
                <title>Watch {movie.title}</title>
            </Head>

            <section className="flex flex-col mt-10 lg:flex-row gap-10">
                <div className="relative mx-auto w-[300px] lg:w-1/3 min-w-[300px] h-96">
                    <Image layout="fill" src={bgImage} alt={movie.title} />
                </div>

                <div className="w-full lg:w-2/3 text-color-white">
                    <h1 className="text-4xl text-center font-semibold mb-3">
                        {movie.title}
                    </h1>
                    <p className="font-semibold text-md flex justify-center gap-2 mb-6">
                        <span>{movie.release_date.slice(0, 4)}</span>
                        <span>-</span>
                        <span>{movie.runtime} mins</span>
                    </p>

                    <p className="flex items-center justify-center gap-x-1 mb-6">
                        <span>Rating:</span>
                        <span>{movie.vote_average.toFixed(1)}</span>
                    </p>
                    <div className="capitalize flex flex-col items-center gap-4 mb-6">
                        <button className="w-full justify-center bg-color-red px-4 py-2 flex gap-2 items-center">
                            <FaVideo />
                            <span>Watch Now</span>
                        </button>
                        <button className="w-full justify-center bg-trans backdrop-blur px-4 py-2 flex gap-2 items-center">
                            <FaPlus />
                            <span>Add to watchlist</span>
                        </button>
                        <button className="w-full justify-center backdrop-blur bg-trans px-4 py-2 flex gap-2 items-center">
                            <FaShare />
                            <span>Share</span>
                        </button>
                    </div>

                    <p className="mb-6 text-start">
                        {movie.overview}
                    </p>

                    <ul className="flex gap-2">
                        {movie.genres?.map((g, i) => (
                            <li key={i} className="">
                                {g.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MovieItem