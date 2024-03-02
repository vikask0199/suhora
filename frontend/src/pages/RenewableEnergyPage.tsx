import EnergyCards from "../components/renewable/EnergyCards";
import EnergyContactUs from "../components/renewable/EnergyContactUs";
import { EnergyContent } from "../components/renewable/EnergyContent";
import EnergyOverlay from "../components/renewable/EnergyOverlay";
import { EnergyProduct } from "../components/renewable/EnergyProduct";

type EnergyProps = {
    currentTheme: string
}


const RenewableEnergyPage = ({ currentTheme }: EnergyProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <EnergyOverlay />
            <EnergyContent />
            <EnergyCards currentTheme={currentTheme} />
            <EnergyProduct />
            <EnergyContactUs />
        </>
    )
}

export default RenewableEnergyPage