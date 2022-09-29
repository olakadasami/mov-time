import Head from 'next/head'
import HeroSection from '../components/Home/HeroSection/HeroSection'
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

      <HeroSection />

      <div className='flex flex-col gap-10'>
        {movieSections.map((section, index) => (
          <SlidingSection key={index} section={section} />
        ))}

      </div>
    </>

  )
}


