import SEOHead from '../components/common/SEOHead'
import HeroSection from '../components/home/HeroSection'
import CompanyIntro from '../components/home/CompanyIntro'
import ProductHighlights from '../components/home/ProductHighlights'
import IndustriesServed from '../components/home/IndustriesServed'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ContactPreview from '../components/home/ContactPreview'

export default function Home() {
  return (
    <>
      <SEOHead path="/" />
      <HeroSection />
      <CompanyIntro />
      <ProductHighlights />
      <IndustriesServed />
      <WhyChooseUs />
      <ContactPreview />
    </>
  )
}
