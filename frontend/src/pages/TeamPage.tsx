import Team from "../components/team/Team"
import TeamCards from "../components/team/TeamCards"
import TeamContact from "../components/team/TeamContact"

// type teamPage = {
//   currentTheme: string
// }
const TeamPage = () => {
  return (
    <>
      {/* <Team currentTheme={currentTheme} />
      <TeamCards currentTheme={currentTheme} />
      <TeamContact currentTheme={currentTheme} /> */}
      <Team  />
      <TeamCards  />
      <TeamContact  />
    </>
  )
}

export default TeamPage