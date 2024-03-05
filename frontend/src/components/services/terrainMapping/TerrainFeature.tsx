import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import theme from "../../../theme"
import terrain from "../../../assets/img/services/terrain.webp"
import { NavLink } from "react-router-dom"


const TerrainFeature = () => {
    const aspectRatio = 3 / 3
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
                    <Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
                        <Text as="span">Terrain Mapping</Text>
                    </Text>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' justifyContent="center" alignItems="center">
                    <Box w={{ base: "100%", md: "50%" }} padding={7}>
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={terrain} />
                        </AspectRatio>
                    </Box>
                    <Flex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>Features</Box>
                        <Box fontSize={theme.fonts.description}>At Suhora we work on a multi pronged data analysis approach . These data and anlysis include: </Box>
                        <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Global Coverage: Our data is accessible worldwide, regardless of location.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                DSM and Bare Earth Models: Choose from options like the natural terrain feature digital
                                surface model (DSM) and the bare-earth digital terrain model (DTM).
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Hydro Enforced: We flatten and correct water bodies and coastlines for precise measurements
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Reliable & Cost Effective: Our data fusion services combine high-resolution data for
                                critical areas (such as cities or flood plains) with wider coverage from medium-resolution
                                datasets.
                            </ListItem>

                        </UnorderedList>
                        <Flex justifyContent="">
                            <NavLink to="/contact-us">
                                <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                    Request Sample Data
                                </Button>
                            </NavLink>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TerrainFeature