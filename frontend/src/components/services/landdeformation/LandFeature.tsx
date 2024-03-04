import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import theme from "../../../theme"
import landdeformation from "../../../assets/img/services/landdeformation.png"
import { NavLink } from "react-router-dom"


const LandFeature = () => {
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
                    <Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
                        <Text as="span">Land Deformation</Text>
                    </Text>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' justifyContent="center" alignItems="center">
                    <Box w={{ base: "100%", md: "50%" }} padding={7}>
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={landdeformation} />
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
                                Displacement Map: Displacement rate few cm between two successive acquisitions
                                in areas unaffected by decorrelation or atmospheric noise.
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Rapid Motion: Displacement rate between mm/year and few cm/year unchanging
                                Coherent radar targets over time
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Motion Track: For displacement rate {`>`} cm/year in areas with a good and persistent
                                radar cross section
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

export default LandFeature