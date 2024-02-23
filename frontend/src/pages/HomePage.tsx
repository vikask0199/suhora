import HomeHeader from "../components/home/HomeHeader"
import { AboutSuhora } from "../components/home/aboutSuhora/AboutSuhora"
import ProductCarousel from "../components/home/productCarousel/ProductCarousel"
import ServiceCarousel from "../components/home/servicesCarousel/ServicesCarousel"
import { WhatWeDo } from "../components/home/whatWeDo/WhatWeDo"

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <AboutSuhora />
      <ProductCarousel />
      <ServiceCarousel />
      <WhatWeDo />
    </>
  )
}

export default HomePage