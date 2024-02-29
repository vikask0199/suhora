
type agricultureProps = {
    currentTheme: string
}


const Agriculture = ({ currentTheme }: agricultureProps) => {
    const backgroundColor = currentTheme === 'light'? 'gray.200' : '#282b3c';
    console.log(backgroundColor)
    return (
        <div>Agriculture</div>
    )
}

export default Agriculture