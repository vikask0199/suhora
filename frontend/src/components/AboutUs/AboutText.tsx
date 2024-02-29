import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import theme from "../../theme"

type spadeFeatureProps = {
  currentTheme: string
}

const AboutText = ({ currentTheme }: spadeFeatureProps) => {
  const aspectRatio = 4 / 3
  const spadeIconArray = [<RiTyphoonLine />]

  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box >
      {/* <Flex
        maxW="6xl"
        mx="auto"
        px={{ base: '4', md: '8', lg: '5' }}
        py={{ base: '4', md: '8', lg: '12' }}
        direction="column"
        gap="2">
        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
          <Text>
            <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
            <Text as="span">SPADE</Text>
          </Text>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "35%" }} padding={7} >
            <AspectRatio ratio={aspectRatio}>
              <Image src="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            </AspectRatio>
          </Box>
          <Flex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} >
            <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>Our Mission</Box>
            <Box fontSize={theme.fonts.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima iusto id doloribus atque beatae praesentium, tempore officiis nam saepe ducimus, sapiente eveniet, quisquam aspernatur fugiat? Vero voluptatibus quis in harum autem. Incidunt dolores voluptate quaerat impedit, molestiae est aspernatur ratione iste, voluptas nesciunt consequatur soluta, enim sit saepe officia rem.</Box>
          </Flex>
        </Flex>
      </Flex> */}
    </Box>
  )
}

export default AboutText