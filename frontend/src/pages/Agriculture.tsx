import AgricultureOverlay from "../components/agriculture/AgricultureOverlay"

type agricultureProps = {
    currentTheme: string
}


const Agriculture = ({ currentTheme }: agricultureProps) => {
    return (
       <>
        <AgricultureOverlay/>
        </>
    )
}

export default Agriculture