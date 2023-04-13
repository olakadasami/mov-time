import Head from 'next/head'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import SlidingSection from '../components/Home/Section/SlidingSection'

export default function Home({ initialData }) {

  const movieSections = [
    // {
    //   title: "Latest Movies",
    //   movies: { type: "latest", page: null }
    // },
    {
      title: "Upcoming Movies",
      movies: { type: "upcoming", page: '1' }
    },
    {
      title: "Popular Movies",
      movies: { type: "popular", page: '1' }
    },
    {
      title: "Top Rated Movies",
      movies: { type: "top_rated", page: '1' }
    },
  ]

  return (
    <>
      <Head>
        <title>MovTime</title>
        <meta name="description" content="Movie App consuming api from TMBD" />
        <link rel="icon" href="/Logo.svg" />
        <title>MovTime | All your favourites in one place</title>
      </Head>

      <HeroSection initialData={initialData} />

      <div className='flex mt-10 flex-col gap-10'>
        {movieSections.map((section, index) => (
          <SlidingSection key={index} section={section} />
        ))}

      </div>
    </>

  )
}

export const getStaticProps = async () => {
  const type = 'popular';
  const page = 1
  const moviesURL = `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US&page=${page}`

  const res = await fetch(moviesURL)
  const data = await res.json()

  return {
    props: { initialData: data.results }
  }
}


