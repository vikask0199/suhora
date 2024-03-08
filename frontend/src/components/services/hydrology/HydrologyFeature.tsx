import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import theme from "../../../theme"
import hydrologymainimage from "../../../assets/img/services/hydrologymainimage.webp"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { homeProductLeftToRight, homeProductRightToLeft, textVarient } from "../../../animation"

const AnimateText = motion(Text)
const AnimateBox = motion(Box)
const AnimateFlex = motion(Flex)

const HydrologyFeature = () => {
    const aspectRatio = 4 / 3
    const spadeIconArray = [<RiTyphoonLine />]


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
                    <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                        <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
                        <Text as="span">Hydrology</Text>
                    </AnimateText>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' justifyContent="center" alignItems="center">
                    <AnimateBox variants={homeProductRightToLeft} whileInView="show" initial="hidden" w={{ base: "100%", md: "50%" }} padding={7} >
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={hydrologymainimage} />
                        </AspectRatio>
                    </AnimateBox>
                    <AnimateFlex variants={homeProductLeftToRight} whileInView="show" initial="hidden" w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>Features</Box>
                        <Box fontSize={theme.fonts.description}>At Suhora we work on a multi pronged data analysis approach . These data and anlysis include: </Box>
                        <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Historical Satellite images
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Historical flood datasets
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Rainfall and basin modeling
                            </ListItem>
                            {/* <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                hello java how are you can we work together
                            </ListItem> */}
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                IDF curves
                            </ListItem>

                        </UnorderedList>
                        <Flex justifyContent="">
                            <NavLink to="/contact-us">
                                <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                    Request Sample Data
                                </Button>
                            </NavLink>
                        </Flex>
                    </AnimateFlex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default HydrologyFeature