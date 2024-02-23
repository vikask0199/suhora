
import { AboutSuhora } from "../components/home/aboutSuhora/AboutSuhora"
import HomeCarousel from "../components/home/homeCarousel/HomeCarousel"
import ProductCarousel from "../components/home/productCarousel/ProductCarousel"
import ServiceCarousel from "../components/home/servicesCarousel/ServicesCarousel"
import { WhatWeDo } from "../components/home/whatWeDo/WhatWeDo"
const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <AboutSuhora />
      <ProductCarousel />
      <ServiceCarousel />
      <WhatWeDo />
    </>
  )
}

export default HomePage