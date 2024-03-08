import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import theme from '../../theme'
import AgricultureImg from '../../assets/img/aboutussImg.webp'
// import 'animate.css';
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../animation';


const AboutusHeader = () => {

  const AnimateHeading = motion(Heading)
  const AnimateText = motion(Text)

  return (
    <>
      <Box as="section" minH="140px" position="relative" p={10} >
        <Box py="32" position="relative" zIndex={1} >
          <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
            <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <AnimateHeading variants={textVarient} whileInView="show" initial="hidden" >
                About Us
              </AnimateHeading>
            </Flex>
            <Flex justifyContent='center' >
              <AnimateText mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} variants={textVarientSecond} whileInView="show" initial="hidden">
                Transforming industries with AI-driven spatial insights for informed decision making
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
              src={AgricultureImg}
              alt="Main Image"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="top bottom"
              position="absolute" />
            <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
          </Box>
        </Flex>
      </Box>



    </>
  )
}
export default AboutusHeader

