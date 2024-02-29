
import CareerHeader from './CareerHeader'
import CareerHeading from './CareerHeading'
import CareerCards from './CareerCards'
import CareerMission from './CareerMission'
import CareerOpportunity from './CareerOpportunity'
import CareerContact from './CareerContact'


const Career = () => {
  return (
    <div>
     <CareerHeader/>
     <CareerHeading/>
     <CareerCards/>
     {/* <CareerMission/> */}
   <CareerOpportunity/>
   <CareerContact/>
    </div>
  )
}

export default Career