import AboutSection from '@/Components/Home/AboutSection'
import BlogSection from '@/Components/Home/BlogSection'
import ClientShowcase from '@/Components/Home/ClientShowcase'
import CompanyLogos from '@/Components/Home/CompanyLogos'
import CTASection from '@/Components/Home/CTASection'  
import HeroSection from '@/Components/Home/HeroSection'
import ServicesSection from '@/Components/Home/ServicesSection'
import TechnologiesSection from '@/Components/Home/TechnologiesSection'
import Testimonials from '@/Components/Home/Testimonials'
import WhyWorkWithUs from '@/Components/Home/WhyWorkWithUs'


const HomePage = () => {
  return (
    <div className="min-h-screen text-white">
       <HeroSection/>
      <AboutSection />
      <ServicesSection />
      <CompanyLogos />
      <WhyWorkWithUs/>
      <CTASection />
       <ClientShowcase/>
      <Testimonials />
      <TechnologiesSection/>
      <BlogSection/>

     
    </div>
  )
}

export default HomePage
