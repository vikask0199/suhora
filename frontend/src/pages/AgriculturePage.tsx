import AgricultureCards from "../components/agriculture/AgricultureCards";
import AgricultureContactUs from "../components/agriculture/AgricultureContactUs";
import { AgricultureContent } from "../components/agriculture/AgricultureContent";
import AgricultureOverlay from "../components/agriculture/AgricultureOverlay"
import { AgricultureProduct } from "../components/agriculture/AgricultureProduct";

type agricultureProps = {
    currentTheme: string
}


const AgriculturePage = ({ currentTheme }: agricultureProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <AgricultureOverlay />
            <AgricultureContent />
            <AgricultureCards currentTheme={currentTheme} />
            <AgricultureProduct />
            <AgricultureContactUs />
        </>
    )
}

export default AgriculturePage