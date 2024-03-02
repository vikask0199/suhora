import DisasterCards from "../components/disaster/DisasterCards";
import DisasterContactUs from "../components/disaster/DisasterContactUs";
import { DisasterContent } from "../components/disaster/DisasterContent";
import DisasterOverlay from "../components/disaster/DisasterOverlay";
import { DisasterProduct } from "../components/disaster/DisasterProduct";

type DisasterProps = {
    currentTheme: string
}


const Disaster = ({ currentTheme }: DisasterProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <DisasterOverlay />
            <DisasterContent />
            <DisasterCards currentTheme={currentTheme} />
            <DisasterProduct />
            <DisasterContactUs />
        </>
    )
}

export default Disaster