
import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import landdeformation from "../../../assets/img/services/landdeformation.webp"
import theme from '../../../theme'
import { motion } from 'framer-motion'
import { textVarient, textVarientSecond } from '../../../animation'

// type hydrologyHeaderProps = {
//   currentTheme: string
// }

const AnimateText = motion(Text)
const AnimateHeading = motion(Heading)


const LandHeader = () => {

  return (
    <>
      <Box as="section" minH="140px" position="relative" p={10} >
        <Box py="32" position="relative" zIndex={1} >
          <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
            <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <AnimateHeading variants={textVarient} whileInView="show" initial="hidden"  >
                Land Deformation
              </AnimateHeading>
            </Flex>
            <Flex justifyContent='center'>
              <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                Mapping Earth's shifts, informing decisions with millimeter precision.
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
              src={landdeformation}
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
export default LandHeader