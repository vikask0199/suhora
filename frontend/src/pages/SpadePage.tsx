
import Spade from "../components/products/spade/Spade"
import SpadeHeader from "../components/products/spade/SpadeHeader"
import Content from "../components/products/spade/Content"
import Slidder from "../components/products/spade/Slidder"
import { Box } from "@chakra-ui/react"




const SpadePage = () => {
  return (
    <Box> 
      <SpadeHeader />
      <Content />
      <Spade />
      <Slidder/>
    
    </Box>

  )
}

export default SpadePage