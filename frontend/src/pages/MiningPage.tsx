import MiningCards from "../components/mining/MiningCards";
import MiningContactUs from "../components/mining/MiningContactUs";
import { MiningContent } from "../components/mining/MiningContent";
import MiningOverlay from "../components/mining/MiningOverlay";
import { MiningProduct } from "../components/mining/MiningProduct";

type MiningProps = {
    currentTheme: string
}


const MiningPage = ({ currentTheme }: MiningProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <MiningOverlay />
            <MiningContent />
            <MiningCards currentTheme={currentTheme} />
            <MiningProduct />
            <MiningContactUs />
        </>
    )
}

export default MiningPage