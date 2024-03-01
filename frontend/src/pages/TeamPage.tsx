import Team from "../components/team/Team"
import TeamCards from "../components/team/TeamCards"
import TeamContact from "../components/team/TeamContact"

type teamPage = {
    currentTheme: string
}
const TeamPage = ({ currentTheme }: teamPage) => {
  return (
    <>
    <Team  currentTheme={currentTheme} />
    <TeamCards currentTheme={currentTheme}/>
    <TeamContact currentTheme={currentTheme}/>
   

    </>
  )
}

export default TeamPage