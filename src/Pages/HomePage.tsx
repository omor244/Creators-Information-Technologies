import AboutSection from '@/Components/Home/AboutSection'
import CompanyLogos from '@/Components/Home/CompanyLogos'
import CTASection from '@/Components/Home/CTASection'
import FeatureSection from '@/Components/Home/FeatureSection'
import HeroSection from '@/Components/Home/HeroSection'
import ServicesSection from '@/Components/Home/ServicesSection'
import Testimonials from '@/Components/Home/Testimonials'
import WhyWorkWithUs from '@/Components/Home/WhyWorkWithUs'

import { Card } from '@/Components/ui/card'


const HomePage = () => {
  return (
    <div className="min-h-screen  text-white">
       <HeroSection/>
      <AboutSection />
      <CompanyLogos />
      <ServicesSection />
      <WhyWorkWithUs/>
      <CTASection />
      <Testimonials/>
      <FeatureSection />

      <section id="cases" className="mx-auto w-full max-w-7xl px-6 pb-20">
        <h3 className="mb-6 text-3xl font-bold">Success Cases</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h4 className="text-xl font-semibold">E-commerce scale-up</h4>
            <p className="mt-2 text-sm text-white/80">Increased conversion by 39% with fast PWA UX and custom checkout flows.</p>
          </Card>
          <Card>
            <h4 className="text-xl font-semibold">SaaS product launch</h4>
            <p className="mt-2 text-sm text-white/80">Zero downtime launch with modern architecture and strong brand presence.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage
