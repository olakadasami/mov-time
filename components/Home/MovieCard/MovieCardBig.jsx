import { useFetchSingleMovie } from '../../../hooks/useFetchSingleMovie'

function MovieCardBig({ movie_id }) {

    const item = useFetchSingleMovie(movie_id)

    console.log(item)

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
        <div style={style} className="w-[250px] h-[350px] grid place-items-end rounded p-4 bg-no-repeat bg-cover">

            <div className="backdrop-blur text-color-white w-full rounded bg-trans p-4 ">
                <h3 className="text-md mb-2 font-bold">
                    {item.title}
                </h3>
                <div className="text-sm font-light flex items-center gap-1 text-primary-light flex-wrap">
                    <p className="">
                        {year} -
                    </p>
                    {item.genres?.map((i) => (
                        <p key={i.id} className="title">
                            {i.name}
                        </p>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default MovieCardBig

// function MovieCard({ item }) {
//     return (
//         <div className='w-60 border border-color-red shadow'>
//             <div className='relative w-full'>
//                 <Image className='object-cover' width={700} height={1000} src= alt={item.title} />
//             </div>

//             <p className="p-4">
//                 {item.title}
//             </p>
//         </div>
//     )
// }