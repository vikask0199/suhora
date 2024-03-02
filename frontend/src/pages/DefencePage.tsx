import DefenceCards from "../components/defence/DefenceCards";
import DefenceContactUs from "../components/defence/DefenceContactUs";
import { DefenceContent } from "../components/defence/DefenceContent";
import DefenceOverlay from "../components/defence/DefenceOverlay";
import { DefenceProduct } from "../components/defence/DefenceProduct";

type DefenceProps = {
    currentTheme: string
}


const DefencePage = ({ currentTheme }: DefenceProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <DefenceOverlay />
            <DefenceContent />
            <DefenceCards currentTheme={currentTheme} />
            <DefenceProduct />
            <DefenceContactUs />
        </>
    )
}

export default DefencePage