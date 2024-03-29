import { HowItsWorks } from "../components/services/hydrology/HowItsWorks"
import HydrologyFeature from "../components/services/hydrology/HydrologyFeature"
import HydrologyHeader from "../components/services/hydrology/HydrologyHeader"
import HydrologyUsacases from "../components/services/hydrology/HydrologyUsacases"



type hydrologyThemeProps = {
    currentTheme: string
}


const HydrologyPage = ({ currentTheme }: hydrologyThemeProps) => {
    return (
        <>
            <HydrologyHeader />
            <HydrologyFeature />
            <HowItsWorks currentTheme={currentTheme} />
            <HydrologyUsacases />
        </>
    )
}

export default HydrologyPage