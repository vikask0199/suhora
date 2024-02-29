import { AspectRatio, Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"
import theme from "../../theme"

type joinTeamProp = {
    currentTheme: string
}

const JoinTeam = ({ currentTheme }: joinTeamProp) => {
    const aspectRatio = 4 / 3


    return (

        <Box py={{ base: '4', md: '8', lg: '12' }}>
            <Flex
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '5' }}
                direction="column"
                gap="2">
                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
                    <Box w={{ base: "100%", md: "50%" }} padding={7} >
                        <Flex background={theme.companyTheme.color.primary} flexDirection="column" justifyContent="space-between" alignItems="start" height="100%" rounded="xl" px={{ base: '4', md: '8', lg: '5' }} py={{ base: '4', md: '8', lg: '5' }}>
                            <Flex flexDirection="column" gap="4">
                                <Text color="white" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                                    Join the team
                                </Text>
                                <Text color="white" fontSize={theme.fonts.subHeadingSecond.size} >
                                    Help make a difference in improving our members’ relationship with money and join our growing team.
                                </Text>
                            </Flex>
                            <VStack w="100%" width="fit-content">
                                <Button width="fit-content" px="8" border="1px solid white" variant="outline" color={`${currentTheme === 'light' ? "#1266A0" : "white"}`} _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                    Join Us
                                </Button>
                            </VStack>
                        </Flex>
                    </Box>
                    <Box w={{ base: "100%", md: "50%" }} padding={7}>
                        <AspectRatio ratio={aspectRatio}>
                            <Image src="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" rounded="xl" />
                        </AspectRatio>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default JoinTeam