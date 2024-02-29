import AboutText from "../components/AboutUs/AboutText"
import AboutusHeader from "../components/AboutUs/AboutusHeader"
import JoinTeam from "../components/AboutUs/JoinTeam"
import Mission from "../components/AboutUs/Mission"
import { OurTeams } from "../components/AboutUs/OurTeams"
type aboutusProps = {
    currentTheme: string
}

const AboutUs = ({ currentTheme }: aboutusProps) => {
    return (
        <>
            <AboutusHeader currentTheme={currentTheme} />
            <AboutText currentTheme={currentTheme}/>
            <Mission currentTheme={currentTheme} />
            <OurTeams currentTheme={currentTheme}/>
            <JoinTeam />
        </>
    )
}

export default AboutUs