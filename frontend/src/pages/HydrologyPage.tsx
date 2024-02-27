import Hydrology from "../components/New/Hydrology"

type hydrologyThemeProps = {
    currentTheme: string
}


const HydrologyPage = ({ currentTheme }: hydrologyThemeProps) => {
    return (
        <>
            <Hydrology currentTheme={currentTheme} />
        </>
    )
}

export default HydrologyPage