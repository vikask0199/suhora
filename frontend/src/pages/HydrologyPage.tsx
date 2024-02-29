
import About from "../components/home/aboutSuhora/About"

type hydrologyThemeProps = {
    currentTheme: string
}


const HydrologyPage = ({ currentTheme }: hydrologyThemeProps) => {
    return (
        <>
            {/* <Hydrology currentTheme={currentTheme} /> */}
            <About currentTheme={currentTheme}  />
        </>
    )
}

export default HydrologyPage