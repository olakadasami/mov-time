import Image from 'next/image';
import Link from 'next/link';
import { useFetchSingleMovie } from '../../../hooks/useFetchSingleMovie'
import videoplay from '../../../assets/Icons/video-circle.svg'


function GenreTags({ genre }) {
    return (
        <p className="capitalize px-5 py-2 rounded-2xl bg-trans backdrop-blur">
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
        <div style={style} className="w-full h-[70vh] flex items-center p-10 rounded inner-shadow bg-no-repeat bg-cover">

            <div className="text-primary-light flex flex-col gap-4">
                <h1 className="text-3xl font-bold">
                    {item.title}
                </h1>
                <div className="text-sm font-light flex items-center gap-1 text-primary-light flex-wrap">
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