import Hydrology from "../components/services/Hydrology"

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