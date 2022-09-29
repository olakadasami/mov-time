import { useFetchSingleMovie } from '../../../hooks/useFetchSingleMovie'

function MovieCardBig({ movie_id }) {

    const item = useFetchSingleMovie(movie_id)

    // the image path
    const bgImage = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    // inline styling for background image
    const style = {
        backgroundImage: `url(${bgImage})`
    }
    // convert the date to year
    const date = item.release_date
    const msecs = Date.parse(date)
    const year = new Date(msecs).getFullYear()

    return (
        <div style={style} className="w-[250px] h-[350px] grid place-items-end rounded p-3 bg-no-repeat bg-cover">
            <div className="backdrop-blur text-color-white w-full rounded bg-trans p-3 ">
                <h3 className="text-md mb-2 font-bold">
                    {item.title}
                </h3>
                <div className="text-sm font-light flex items-center gap-1 text-primary-light flex-wrap">
                    <p className="">
                        {year}
                    </p>
                    <span>&#9830;</span>
                    {item.genres?.map((genre) => (
                        <p key={genre.id} className="">
                            {genre.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCardBig