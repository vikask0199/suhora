import Career from "../components/career/Career"
type CareerPage = {
    currentTheme: string
  }
  
const CareerPage = ({ currentTheme }: CareerPage) => {
  return (
    <div>

        <Career/>
    </div>
  )
}

export default CareerPage