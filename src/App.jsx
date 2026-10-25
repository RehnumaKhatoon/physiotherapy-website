import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import Services from './components/sections/Services/Services'
import Marquee from './components/sections/Marquee/Marquee'
import About from './components/sections/About/About'
import Conditions from './components/sections/Conditions/Conditions'
import Doctors from './components/sections/Doctors/Doctors'
import Certificates from './components/sections/Certificates/Certificates'
import Process from './components/sections/Process/Process'
import Testimonials from './components/sections/Testimonials/Testimonials'

/* Page layout: sections render top to bottom in this order */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <About />
        <Conditions />
        <Doctors />
        <Certificates />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
