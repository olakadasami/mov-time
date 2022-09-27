import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MovTime | Home</title>
        <meta name="description" content="Movie App consuming api from TMBD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold text-center">
        Home
      </h1>
    </>
  )
}
