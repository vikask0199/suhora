import { AboutLand } from "../components/services/landdeformation/AboutLand"
import { HowItsWorks } from "../components/services/landdeformation/HowItsWorks"
import LandFeature from "../components/services/landdeformation/LandFeature"
import LandHeader from "../components/services/landdeformation/LandHeader"
import LandUsacases from "../components/services/landdeformation/LandUsacases"




type LandThemeProps = {
    currentTheme: string
}


const LandDeformationPage = ({ currentTheme }: LandThemeProps) => {
    return (
        <>
            <LandHeader currentTheme={currentTheme} />
            <AboutLand currentTheme={currentTheme} />
            <LandFeature />
            <HowItsWorks currentTheme={currentTheme} />
            <LandUsacases />
        </>
    )
}

export default LandDeformationPage