
import { AboutSuhora } from "../components/home/aboutSuhora/AboutSuhora"
import HomeCarousel from "../components/home/homeCarousel/HomeCarousel"
import IndustryCarousel from "../components/home/industryCarousel/IndustriesCarousel"
import { OurPartners } from "../components/home/partners/OurPartners"
import ProductCarousel from "../components/home/productCarousel/ProductCarousel"
import { WhatWeDo } from "../components/home/whatWeDo/WhatWeDo"

interface homePageProps {
  currentTheme: string,
}

const HomePage = ({ currentTheme }: homePageProps) => {


  return (
    <>
      <HomeCarousel />
      <AboutSuhora currentTheme={currentTheme} />
      <ProductCarousel />
      <IndustryCarousel currentTheme={currentTheme} />
      <WhatWeDo />
      {/* <HomeServices currentTheme={currentTheme}/> */}
      <OurPartners currentTheme={currentTheme} />
    </>
  )
}

export default HomePage