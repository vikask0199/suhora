import { Box, Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react'
import theme from '../../theme'
import { Link } from 'react-router-dom'
// interface aboutSuhoraProps {
//     currentTheme: string
// }
const TeamContact = () => {
  // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
          <Box maxW="6xl">
            <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
              Join our team
            </Heading>
            <Text fontSize={theme.fonts.subHeadingSecond.size.weight} mt="4" maxW="lg" >
              Join our team and be part of a journey where your talents meet opportunities, and together, we create something extraordinary.

            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
              <Link to="/career" >
              <Button width="fit-content" px="8" border="1px solid white" variant="outline" color="white" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0" }} >
                Join us
              </Button>
              </Link>
            </Stack>
          </Box>
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
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
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
  )
}
export default TeamContact