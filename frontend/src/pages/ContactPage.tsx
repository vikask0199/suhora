
import ContactUs from "../components/contact/ContactUs"

type caontactProps = {
    currentTheme: string,
}

const ContactPage = ({ currentTheme }: caontactProps) => {
    return (
        <>
            <ContactUs currentTheme={currentTheme}/>
        </>
    )
}

export default ContactPage