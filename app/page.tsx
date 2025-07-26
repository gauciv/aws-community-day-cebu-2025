import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Speakers } from "@/components/speakers"
import { Tickets } from "@/components/tickets"
import { Sponsors } from "@/components/sponsors"
import { Volunteers } from "@/components/volunteers"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Tickets />
      <Sponsors />
      <Volunteers />
      <Footer />
    </main>
  )
}
