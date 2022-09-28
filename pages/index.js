import Head from 'next/head'
import SlidingSection from '../components/Home/Section/SlidingSection'

export default function Home() {

  const movieSections = [
    // {
    //   title: "Latest Movies",
    //   movies: { type: "latest", page: "" }
    // },
    {
      title: "Popular Movies",
      movies: { type: "popular", page: '1' }
    },
    {
      title: "Top Rated Movies",
      movies: { type: "top_rated", page: '1' }
    },
    {
      title: "Upcoming Movies",
      movies: { type: "upcoming", page: '1' }
    },
  ]

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

      <div className='flex flex-col gap-10'>
        {movieSections.map((section, index) => (
          <SlidingSection key={index} section={section} />
        ))}

      </div>
    </>

  )
}


