import Image from 'next/image';
import Link from 'next/link';
import { useFetchSingleMovie } from '../../../hooks/useFetchSingleMovie'
import videoplay from '../../../assets/Icons/video-circle.svg'


function GenreTags({ genre }) {
    return (
        <p className="capitalize px-5 py-2 rounded-2xl bg-trans-white backdrop-blur">
            {genre.name}
        </p>
    )
}

export default function HeroMovieCard({ movie_id }) {
    const item = useFetchSingleMovie(movie_id)
    // the image path
    const bgImage = `https://image.tmdb.org/t/p/original${item.poster_path}`;

    // inline styling for background image
    const style = {
        backgroundImage: `url(${bgImage})`
    }

    return (
        <div style={style} className="w-full h-[70vh] relative flex items-center p-10 rounded inner-shadow bg-no-repeat bg-cover">

            <div className="absolute z-10 top-0 left-0 h-full w-full backdrop"></div>


            <div className="text-color-white z-50">
                <h1 className="text-4xl mb-4 font-bold">
                    {item.title}
                </h1>
                <div className="text-sm mb-8 font-light flex items-center gap-2 flex-wrap">
                    {item.genres?.map((genre) => (
                        <GenreTags key={genre.id} genre={genre} />
                    ))}
                </div>
                <Link href='/' className="">
                    <div className='flex w-fit items-center gap-2 bg-color-red px-7 py-3 rounded-3xl'>
                        <p>
                            Watch
                        </p>
                        <Image src={videoplay} alt="video play" />
                    </div>
                </Link>
            </div>

        </div>
    )
}