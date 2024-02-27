import Hydrology from "../components/New/Hydrology"

type hydrologyThemeProps = {
    currentTheme: string
}


const HydrologyPage = ({ currentTheme }: hydrologyThemeProps) => {
    return (
        <>
            <Hydrology />
        </>
    )
}

export default HydrologyPage