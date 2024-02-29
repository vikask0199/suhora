import {Box,Flex,Heading,Text,Img} from '@chakra-ui/react'
import theme from '../../theme'
import careerIamge from '../../assets/img/career.jpg'
const CareerHeader = () => {
  return (
    <div>
     <Box  as="section" minH="140px" position="relative" p={10} >
      <Box py="32" position="relative" zIndex={1} >
        <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
          <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
            <Heading  >
            Career At Suhora
            </Heading>
           
           
          </Flex>
          <Flex justifyContent='center'>
          <Text  mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
          "Embrace each new opportunity as a stepping stone toward your professional growth and fulfillment."
          
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
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={careerIamge}
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

    </div>
  )
}

export default CareerHeader