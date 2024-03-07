import { AspectRatio, Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { rotationEarthTopToBottom, textVarient, textVarientDelayMedium } from "../../animation"
import earthImage from '../../assets/video/Rotating_earth_(huge).gif'
import theme from "../../theme"


const AnimatedText = motion(Text)
const AnimatedVStack = motion(VStack)
const AnimatedBox = motion(Box)

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
                                <AnimatedText variants={textVarient} whileInView="show" initial="hidden" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
                                    Our Offerings
                                </AnimatedText>
                                <AnimatedText fontSize={theme.fonts.subHeadingSecond.size} variants={textVarient} whileInView="show" initial="hidden">
                                    With Suhora’s reliable partners in Earth Observation from high resolution to medium resolution we guarantee that you best satellite data suiting to your needs and at prices that are lowest in the region. Our experience in satellite imagery sales helps in get the right product at perfect price to you. Drop us an
                                    email or small or large requirements. We love satellite data!
                                </AnimatedText>
                                <AnimatedVStack w="100%" width="fit-content" variants={textVarientDelayMedium} whileInView="show" initial="hidden">
                                    <Link to="/contact-us">
                                        <Button width="fit-content" px="8" border='1px solid #1266A0' variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: "1px solid #1266A0", color: 'white' }} >
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </AnimatedVStack>
                            </Flex>

                        </Flex>
                    </Box>

                    <AnimatedBox w={{ base: "100%", md: "50%" }} p={20} >
                        <AnimatedBox variants={rotationEarthTopToBottom} whileInView="show" initial="hidden">
                            <AspectRatio ratio={aspectRatio}>
                                <Image src={earthImage} />
                            </AspectRatio>
                        </AnimatedBox>
                    </AnimatedBox>
                </Flex>
            </Flex>
        </Box>
    )
}

export default JoinTeam