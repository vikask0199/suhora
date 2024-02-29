import { AboutLance } from "../components/products/lance/AboutLance"
import { LanceDemo } from "../components/products/lance/LanceDemo"
import LanceFeature from "../components/products/lance/LanceFeature"
import { LanceHome } from "../components/products/lance/LanceHome"
import { LanceIndutryWeServe } from "../components/products/lance/LanceIndutryWeServe"

type lancePageProps = {
    currentTheme: string,
}


const LancePage = ({ currentTheme }: lancePageProps) => {
    return (
        <>
            <LanceHome />
            <AboutLance />
            <LanceFeature currentTheme={currentTheme} />
            <LanceIndutryWeServe />
            <LanceDemo />
        </>
    )
}

export default LancePage