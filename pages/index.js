import Head from 'next/head';
import Example from '../components/navbar';
import Prices from '../components/prices';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import YoutubeEmbed from '../components/youtubeEmbed';
import Image from 'next-images';
import GoogleMap from '../components/maps';

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-0 bg-contain -mt-36 bg-barbell">
      <Head>
        <Example />
        <title>North Down Barbell Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mt-64 text-center px-50">
        <YoutubeEmbed embedId="kf0Af6A5wW8" />
        <Prices/>
        <Carousel />
        <GoogleMap />
      </main>
    <Footer />
    </div>
  )
}
