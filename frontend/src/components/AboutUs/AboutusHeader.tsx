import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import theme from '../../theme'
import AgricultureImg from '../../assets/img/SatelliteAbout.jpg'



type aboutusProps = {
  currentTheme: string
}
const AboutusHeader = ({ currentTheme }: aboutusProps) => {

  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
  return (
    <>
      <Box as="section" minH="140px" position="relative" p={10} >
        <Box py="32" position="relative" zIndex={1} >
          <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
            <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <Heading  >
                About Us
              </Heading>


            </Flex>
            <Flex justifyContent='center'>
              <Text mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

              </Text>
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
              position="absolute"
            />
            <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
          </Box>
        </Flex>
      </Box>



    </>
  )
}
export default AboutusHeader

