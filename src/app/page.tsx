import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import LineUp from '@/components/LineUp'
import InstaStrip from '@/components/InstaStrip'
import Vibe from '@/components/Vibe'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <LineUp />
      <InstaStrip />
      <Vibe />
      <Locations />
      <Footer />
    </main>
  )
}
