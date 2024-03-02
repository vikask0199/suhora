import ForestryCards from "../components/forestry/ForestryCards";
import ForestryContactUs from "../components/forestry/ForestryContactUs";
import { ForestryContent } from "../components/forestry/ForestryContent";
import ForestryOverlay from "../components/forestry/ForestryOverlay";
import { ForestryProduct } from "../components/forestry/ForestryProduct";

type ForestryProps = {
    currentTheme: string
}


const ForestPage = ({ currentTheme }: ForestryProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <ForestryOverlay />
            <ForestryContent />
            <ForestryCards currentTheme={currentTheme} />
            <ForestryProduct />
            <ForestryContactUs />
        </>
    )
}

export default ForestPage