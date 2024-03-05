
import { AboutSpade } from "../components/products/spade/AboutSpade"
import { HowItsWorksSpade } from "../components/products/spade/HowItsWorksSpade"
import { SpadeDemo } from "../components/products/spade/SpadeDemo"
import SpadeFeature from "../components/products/spade/SpadeFeature"
import { SpadeHome } from "../components/products/spade/SpadeHome"
import { SpadeIndutryWeServe } from "../components/products/spade/SpadeIndutryWeServe"

type spadePageProps = {
  currentTheme: string
}


const SpadePage = ({ currentTheme }: spadePageProps) => {
  return (
    <>
      <SpadeHome />
      <AboutSpade  currentTheme={currentTheme}/>
      <SpadeFeature currentTheme={currentTheme}/>
      <HowItsWorksSpade currentTheme={currentTheme} />
      <SpadeIndutryWeServe />
      <SpadeDemo />
    </>

  )
}

export default SpadePage