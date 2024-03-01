import { AboutTerrain } from "../components/services/terrainMapping/AboutTerrain"
import { HowItsWorks } from "../components/services/terrainMapping/HowItsWorks"
import TerrainFeature from "../components/services/terrainMapping/TerrainFeature"
import TerrainHeader from "../components/services/terrainMapping/TerrainHeader"
import TerrainUsacases from "../components/services/terrainMapping/TerrainUsacases"


type TerrainThemeProps = {
    currentTheme: string
}


const TerrainMappingPage = ({ currentTheme }: TerrainThemeProps) => {
    return (
        <>
            <TerrainHeader currentTheme={currentTheme} />
            <AboutTerrain currentTheme={currentTheme} />
            <TerrainFeature />
            <HowItsWorks currentTheme={currentTheme} />
            <TerrainUsacases />
        </>
    )
}

export default TerrainMappingPage