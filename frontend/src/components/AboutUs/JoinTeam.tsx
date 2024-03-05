import { AspectRatio, Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"
import theme from "../../theme"
import earthImage from '../../assets/video/Rotating_earth_(huge).gif'
import { Link } from "react-router-dom"

type joinTeamProp = {
    currentTheme: string
}

const JoinTeam = ({ currentTheme }: joinTeamProp) => {
    const aspectRatio = 3 / 3
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (

        <Box background={backgroundColor} >
            <Flex
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '5' }}
                direction="column"
                gap="2">
                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems='center'>
                    <Box w={{ base: "100%", md: "50%" }} >
                        <Flex flexDirection="column" justifyContent="space-between" alignItems="start" height="100%" rounded="xl" px={{ base: '4', md: '8', lg: '5' }} py={{ base: '4', md: '8', lg: '5' }}>
                            <Flex flexDirection="column" gap="4" p={8}>
                                <Text fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
                                  Our Offerings
                                </Text>
                                <Text  fontSize={theme.fonts.subHeadingSecond.size} >
                                With Suhora’s reliable partners in Earth Observation from high resolution to medium resolution we guarantee that you best satellite data suiting to your needs and at prices that are lowest in the region. Our experience in satellite imagery sales helps in get the right product at perfect price to you. Drop us an 
                                email or small or large requirements. We love satellite data!
                                </Text>
                                <VStack w="100%" width="fit-content">
                                    <Link to="/contact-us">
                            <Button width="fit-content" px="8" border='1px solid #1266A0'variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0",color:'white'}} >
                     Get in Touch
                    </Button>
                    </Link>
                            </VStack>
                            </Flex>
                           
                        </Flex>
                    </Box>
                    
                    <Box w={{ base: "100%", md: "50%" }}  p={20}  >
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={earthImage} />
                        </AspectRatio>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default JoinTeam