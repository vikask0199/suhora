import ServicesContact from "../components/services/serviceMain/ServiceContact"
import ServicesCards from "../components/services/serviceMain/ServicesCards"
import ServicesContent from "../components/services/serviceMain/ServicesContent"
import ServicesOverlay from "../components/services/serviceMain/ServicesOverlay"

// type LandThemeProps = {
//   currentTheme: string
// }


const ServicesMain = () => {
  return (
    <>
     <ServicesOverlay />
     <ServicesContent/>
    <ServicesCards />

     <ServicesContact/>
    </>
  )
}

export default ServicesMain