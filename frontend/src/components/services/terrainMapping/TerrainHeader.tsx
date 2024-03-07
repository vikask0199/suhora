import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import theme from '../../../theme'
import terrain from "../../../assets/img/services/terrain.webp"
import { motion } from 'framer-motion'
import { textVarient, textVarientSecond } from '../../../animation'

// type hydrologyHeaderProps = {
//   currentTheme: string
// }


const AnimateHeading = motion(Heading)
const AnimateText = motion(Text)


const TerrainHeader = () => {

  return (
    <>
      <Box as="section" minH="140px" position="relative" p={10} >
        <Box py="32" position="relative" zIndex={1} >
          <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
            <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <AnimateHeading variants={textVarient} whileInView="show" initial="hidden" >
                Terrain Mapping
              </AnimateHeading>
            </Flex>
            <Flex justifyContent='center'>
              <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                Elevating decisions with precision in 3D terrain solutions.
              </AnimateText>
            </Flex>
          </Box>
        </Box>
        <Flex
          id="image-wrapper"
          position="absolute"
          insetX="0"
          insetY="0"
          w="full"
          h="full"
          overflow="hidden"
          align="center">
          <Box position="relative" w="full" h="full">
            <Img
              src={terrain}
              alt="Main Image"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="top bottom"
              position="absolute"
            />
            <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default TerrainHeader