import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import theme from "../../../theme"
import { Link } from "react-router-dom"
import sidmain from "../../../assets/img/products/sid_monitor_final.webp"
import { motion } from "framer-motion"
import { homeProductLeftToRight, homeProductRightToLeft, textVarient } from "../../../animation"


const AnimatedText = motion(Text)
const AnimatedBox = motion(Box)
const AnimatedFlex = motion(Flex)

const SidFeature = () => {
    const aspectRatio = 3 / 2.5
    const spadeIconArray = [<RiTyphoonLine />]

    return (
        <Box >
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
                        <Text as="span">SID</Text>
                    </AnimatedText>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                    <AnimatedBox w={{ base: "100%", md: "50%" }} padding={7} variants={homeProductRightToLeft} whileInView="show" initial="hidden">
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={sidmain} />
                        </AspectRatio>
                    </AnimatedBox>
                    <AnimatedFlex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between" variants={homeProductLeftToRight} whileInView="show" initial="hidden">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>SID</Box>
                        <Box fontSize={theme.fonts.description}>SID harnesses satellite data for disaster management and insurance, shaping a safer, prepared world through technology.</Box>
                        <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                SID utilizes real-time satellite data for disaster management and insurance.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Disaster Dashboard aids emergency response with real-time disaster data.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Insurance Dashboard transforms risk assessment and claims processing.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                SID benefits insurance and banking sectors with dynamic environmental insights.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Technology-driven SID promotes a safer, resilient global community.
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

export default SidFeature