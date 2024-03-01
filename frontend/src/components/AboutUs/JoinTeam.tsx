import { AspectRatio, Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"
import theme from "../../theme"
import earthImage from '../../assets/img/earthhh-removebg-preview.png'
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
                                    Join the team
                                </Text>
                                <Text  fontSize={theme.fonts.subHeadingSecond.size} >
                                    Help make a difference in improving our members’ relationship with money and join our growing team. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum?
                                </Text>
                                <VStack w="100%" width="fit-content">
                            <Button width="fit-content" px="8" border='1px solid #1266A0'variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0",color:'white'}} >
                     Explore Our Products
                    </Button>
                            </VStack>
                            </Flex>
                           
                        </Flex>
                    </Box>
                    
                    <Box w={{ base: "100%", md: "50%" }}   >
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={earthImage}  />
                        </AspectRatio>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default JoinTeam