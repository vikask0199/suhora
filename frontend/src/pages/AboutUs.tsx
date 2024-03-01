

import AboutusCards from "../components/AboutUs/AboutusCards"
import AboutusHeader from "../components/AboutUs/AboutusHeader"
import JoinTeam from "../components/AboutUs/JoinTeam"
import Mission from "../components/AboutUs/Mission"
// import { OurTeams } from "../components/AboutUs/OurTeams"
type aboutusProps = {
    currentTheme: string
}

const AboutUs = ({ currentTheme }: aboutusProps) => {
    return (
        <>
            <AboutusHeader />
          
            <Mission  currentTheme={currentTheme}/>
            {/* <OurTeams currentTheme={currentTheme}/> */}
            <JoinTeam currentTheme={currentTheme}/>
           <AboutusCards/>
        </>
    )
}

export default AboutUs