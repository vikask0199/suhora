
import Hydrology from "../components/New/Hydrology"
import { AboutSuhora } from "../components/home/aboutSuhora/AboutSuhora"
import HomeCarousel from "../components/home/homeCarousel/HomeCarousel"
import ProductCarousel from "../components/home/productCarousel/ProductCarousel"
import ServiceCarousel from "../components/home/servicesCarousel/ServicesCarousel"
import { WhatWeDo } from "../components/home/whatWeDo/WhatWeDo"
import SpadePage from "./SpadePage"

interface homePageProps {
  currentTheme: string,
}

const HomePage = ({ currentTheme }: homePageProps) => {


  return (
    <>
      {/* <HomeCarousel /> */}
      <Hydrology/>
      <AboutSuhora currentTheme={currentTheme} />
      <ProductCarousel />
      <ServiceCarousel currentTheme={currentTheme}/>
      <WhatWeDo />
      <SpadePage />
    </>
  )
}

export default HomePage