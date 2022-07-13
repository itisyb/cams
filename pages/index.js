import Head from 'next/head'
import Image from 'next/image'
import HeroTerminal from '../components/HeroTerminal'
import HeroTabs from '../components/HeroTabs'
import { ResponsiveNavBar } from '../components/Navbar'
import { PricingTable } from '../components/Pricing'

export default function Home() {
  return (    
  <div className="max-w-7xl mx-auto px-4">
    <ResponsiveNavBar />
    <section className="Hero text-black ">
  <div className="py-28 flex justify-between items-center">
    <div className="max-w-xl relative">
    {/* <div className="w-96 h-96 absolute -top-24  -left-20 -z-10 blur-2xl rounded-full bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-400 opacity-20"></div>
    <div className="w-96 h-96 absolute -right-0 -z-10 blur-2xl rounded-full bg-gradient-to-l from-indigo-400 via-purple-300 to-blue-300 opacity-20"></div> */}
    {/* <div class="w-96 h-96 absolute left-0 -z-10 blur-3xl rounded-full bg-purple-400 opacity-20"></div> */}
      <h1 className="text-3xl font-semibold sm:text-5xl">
      Generate on-demand CAMS of your customer
      </h1>

      <p className="max-w-3xl  mt-4 sm:leading-relaxed sm:text-xl">
      Great option to integrate a new feature to get CAMS statements of user in Real-time.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <a className="block w-full bg-blue-600  px-12 border-blue-600 rounded-md py-4 text-sm font-medium text-white  sm:w-auto active:text-opacity-75 hover:opacity-90  focus:outline-none focus:ring" href="/get-started">
          Get Started
        </a>

        <a href="https://calendly.com/yashbindal_/30min" className="block w-full px-12 py-4 text-sm font-medium bg-white  text-blue-600 border border-blue-600 rounded-md sm:w-auto hover:opacity-90 active:bg-blue-500 focus:outline-none focus:ring" >
          Request a Demo
        </a>
      </div>
    </div>
    <div>
    <HeroTabs />
    </div>
  </div>
</section>
<PricingTable />
</div>
  )
}