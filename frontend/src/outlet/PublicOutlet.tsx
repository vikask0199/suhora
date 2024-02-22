import { Outlet } from "react-router-dom";
import Footer from "../components/reusable/footerComponent/Footer";
import Navbar from "../components/reusable/navComponent/Navbar";

interface PublicOutletProps {
    currentTheme: string,
    toggleTheme: () => void;
}


const PublicOutlet = ({ toggleTheme, currentTheme }: PublicOutletProps) => {
    return (
        <>
            <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
            <Outlet />
            <Footer currentTheme={currentTheme}/>
        </>
    )
}

export default PublicOutlet