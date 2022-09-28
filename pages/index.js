import Head from 'next/head'

import { useFetchMovies } from '../hooks/useFetchMovies'
import MovieCardBig from '../components/Home/MovieCard/MovieCardBig'

export default function Home() {

  const popular = useFetchMovies({ type: "popular", page: '1' })

  console.log(popular)

  return (
    <>
      <Head>
        <title>MovTime</title>
        <meta name="description" content="Movie App consuming api from TMBD" />
        <link rel="icon" href="/Logo.svg" />
      </Head>

      <h1 className="text-2xl mb-8 font-bold text-center">
        Home


      </h1>

      <div className="flex gap-4 flex-wrap">
        {popular.map(item => (
          <MovieCardBig movie_id={item.id} key={item.id} />
        ))}
      </div>

    </>

  )
}


