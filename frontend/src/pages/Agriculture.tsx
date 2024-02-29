import AgricultureOverlay from "../components/agriculture/AgricultureOverlay"

type agricultureProps = {
    currentTheme: string
}


const Agriculture = ({ currentTheme }: agricultureProps) => {
    const backgroundColor = currentTheme === 'light'? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
       <>
        <AgricultureOverlay/>
        </>
    )
}

export default Agriculture