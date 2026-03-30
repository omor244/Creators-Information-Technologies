import AboutSection from '@/Components/Home/AboutSection'
import BlogSection from '@/Components/Home/BlogSection'
import CompanyLogos from '@/Components/Home/CompanyLogos'
import CTASection from '@/Components/Home/CTASection'  
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
      <BlogSection/>

     
    </div>
  )
}

export default HomePage
