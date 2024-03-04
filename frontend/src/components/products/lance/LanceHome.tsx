import { Box, Button, Flex, Img, Stack, Text } from '@chakra-ui/react'
import theme from '../../../theme'
import { Link } from 'react-router-dom'
import lancemain from '../../../assets/img/products/lancemain.png'
export const LanceHome = () => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
          <Box maxW="xl">
            <Text fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              LANCE
            </Text>
            <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} mt="4" maxW="lg">
            Powering defense with human-AI synergy for unparalleled situational awareness and strategic readiness in a rapidly evolving world.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
              <Link to="/contact-us">
                <Button width="fit-content" px="8" border="1px solid white" variant="outline" color="white" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0" }} >
                  Request Demo
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
            src={lancemain}
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