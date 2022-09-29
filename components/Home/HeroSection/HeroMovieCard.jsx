import Image from 'next/image';
import Link from 'next/link';
import { useFetchSingleMovie } from '../../../hooks/useFetchSingleMovie'
import videoplay from '../../../assets/Icons/video-play.svg'


function GenreTags({ genre }) {
    return (
        <p className="capitalize px-6 py-2 rounded-lg bg-trans backdrop-blur">
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
        <div style={style} className="w-full h-[40vh] flex justify-center items-center rounded inner-shadow bg-no-repeat bg-cover">

            <div className="text-color-white flex flex-col gap-8">
                <h1 className="text-4xl mb-2 font-bold">
                    {item.title}
                </h1>
                <div className="text-sm font-light flex items-center gap-1 text-primary-light flex-wrap">
                    {item.genres?.map((genre) => (
                        <GenreTags key={genre.id} genre={genre} />
                    ))}
                </div>
                <Link href='/'>
                    <div>
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