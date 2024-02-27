
import { AboutSuhora } from "../components/home/aboutSuhora/AboutSuhora"
import HomeCarousel from "../components/home/homeCarousel/HomeCarousel"
import ProductCarousel from "../components/home/productCarousel/ProductCarousel"
import ServiceCarousel from "../components/home/servicesCarousel/ServicesCarousel"
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
      <ServiceCarousel currentTheme={currentTheme}/>
      <WhatWeDo />
    </>
  )
}

export default HomePage