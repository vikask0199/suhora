import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import theme from "../../../theme"
import { RiTyphoonLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import lancemain from "../../../assets/img/products/lance_monitor_final.webp"
import { motion } from "framer-motion"
import { homeProductLeftToRight, homeProductRightToLeft, textVarient } from "../../../animation"

const AnimatedBox  = motion(Box)
const AnimatedText = motion(Text)
const AnimatedFlex = motion(Flex)

const LanceFeature = () => {
    const aspectRatio = 3 / 2.5
    const spadeIconArray = [<RiTyphoonLine />]

    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box>
            <Flex
                maxW="6xl"
                mx="auto"
                px={{ base: '4', md: '8', lg: '5' }}
                py={{ base: '4', md: '8', lg: '12' }}
                direction="column"
                gap="4">
                <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                    <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                        <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
                        <Text as="span">LANCE</Text>
                    </AnimatedText>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                    <AnimatedBox w={{ base: "100%", md: "50%" }} padding={7} variants={homeProductRightToLeft} whileInView="show" initial="hidden">
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={lancemain} />
                        </AspectRatio>
                    </AnimatedBox>
                    <AnimatedFlex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between" variants={homeProductLeftToRight} whileInView="show" initial="hidden">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>LANCE</Box>
                        <Box fontSize={theme.fonts.description}>Powering defense with human-AI synergy for unparalleled situational awareness and strategic readiness in a rapidly evolving world.</Box>
                        <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Fusion of human expertise and AI in defense.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Real-time insights enable proactive strategies for defense agencies.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                High-definition sensors and smart algorithms ensure actionable intelligence.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Versatile LANCE offers unparalleled situational awareness in defense.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Human-AI synergy sets a new benchmark in defense readiness.
                            </ListItem>
                        </UnorderedList>
                        <Flex justifyContent="">
                            <Link to="/contact-us">
                                <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                    Request Demo
                                </Button>
                            </Link>
                        </Flex>
                    </AnimatedFlex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default LanceFeature