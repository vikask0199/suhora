import InfrastructureCards from "../components/infrastructure/InfrastructureCards";
import InfrastructureContactUs from "../components/infrastructure/InfrastructureContactUs";
import { InfrastructureContent } from "../components/infrastructure/InfrastructureContent";
import InfrastructureOverlay from "../components/infrastructure/InfrastructureOverlay";
import { InfrastructureProduct } from "../components/infrastructure/InfrastructureProduct";

type agricultureProps = {
    currentTheme: string
}


const InfrastructurePage = ({ currentTheme }: agricultureProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <>
            <InfrastructureOverlay />
            <InfrastructureContent />
            <InfrastructureCards currentTheme={currentTheme} />
            <InfrastructureProduct />
            <InfrastructureContactUs />
        </>
    )
}

export default InfrastructurePage