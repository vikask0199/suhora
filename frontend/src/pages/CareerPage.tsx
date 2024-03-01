import CareerContact from "../components/career/CareerContact"
import CareerHeader from "../components/career/CareerHeader"
import CareerHeading from "../components/career/CareerHeading"
import CareerOpportunity from "../components/career/CareerOpportunity"
type CareerPage = {
  currentTheme: string
}

const CareerPage = ({ currentTheme }: CareerPage) => {
  return (
    <div>
      <CareerHeader />
      <CareerHeading currentTheme={currentTheme} />
      <CareerOpportunity />
      <CareerContact />
    </div>
  )
}

export default CareerPage