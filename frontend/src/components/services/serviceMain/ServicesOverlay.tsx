
import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import AgricultureImg from '../../../assets/img/industries/services_overlay.webp'
import theme from '../../../theme'
const ServicesOverlay = () => {

  return (
    <>
      <Box as="section" minH="140px" position="relative" p={10} >
        <Box py="32" position="relative" zIndex={1} >
          <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
            <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <Heading  >
              Tailored Services
              </Heading>


            </Flex>
            <Flex justifyContent='center'>
              <Text mt='1em' textAlign="center" fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
               Worldwide infrastructure protected with precision mapping 
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
export default ServicesOverlay