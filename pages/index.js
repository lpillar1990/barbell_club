import Head from 'next/head';
import Example from '../components/navbar';
import Prices from '../components/prices';
import Logo from '../public/barbell-logo2.png';
import Image from 'next/image';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import YoutubeEmbed from '../components/youtubeEmbed';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 ">

      <Head>
        <Example />
        <title>North Down Barbell Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full text-center bg-gray-500 px-50 ">
        <Image src={Logo} alt="Barbell logo" width={1000} height={500} priority />
        <YoutubeEmbed embedId="oHaGR0shnvA" />
        <Prices/>
        <Carousel />

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-16 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <form className="w-full max-w-lg mt-10 mb-10 bg-red-200">
  <div className="flex flex-wrap mb-6 -mx-2 ">
    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 ">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
        First Name
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-300 border focus:outline-none" id="grid-first-name" type="text" placeholder="Jane" />
    </div>
    <div className="w-full px-3 md:w-1/2">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name">
        Last Name
      </label>
      <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-300 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="flex flex-wrap mb-6 -mx-2">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
        E-mail
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-300 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
    </div>
  </div>
  <div className="flex flex-wrap mb-6 -mx-2">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
        Message
      </label>
      <textarea className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-300 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500" id="message"></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="px-5 py-2 font-bold text-black rounded shadow bg-white-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none" type="button">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
      </main>
    <Footer />
    </div>
  )
}
