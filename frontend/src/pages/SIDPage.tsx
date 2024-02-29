import { AboutSid } from "../components/products/sid/AboutSid"
import { SidDemo } from "../components/products/sid/SidDemo"
import SidFeature from "../components/products/sid/SidFeature"
import { SidHome } from "../components/products/sid/SidHome"
import { SidIndutryWeServe } from "../components/products/sid/SidIndutryWeServe"

type currentThemeProps = {
    currentTheme: string,
}

const SIDPage = ({ currentTheme }: currentThemeProps) => {
    return (
        <>
            <SidHome />
            <AboutSid />
            <SidFeature currentTheme={currentTheme} />
            <SidIndutryWeServe />
            <SidDemo />
        </>
    )
}

export default SIDPage