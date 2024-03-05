import { AspectRatio, Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { RiTyphoonLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import spademain from '../../../assets/img/products/spade_monitor_final.webp'
import theme from "../../../theme"

const SpadeFeature = () => {
    const aspectRatio = 3 / 3
    const spadeIconArray = [<RiTyphoonLine />]

    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

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
                    <Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Feature of </Text>
                        <Text as="span">SPADE</Text>
                    </Text>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                    <Box w={{ base: "100%", md: "50%" }} padding={7}>
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={spademain} />
                        </AspectRatio>
                    </Box>
                    <Flex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>SPADE</Box>
                        <Box fontSize={theme.fonts.description}>A seamless SaaS platform delivering comprehensive access to multi-sensor satellite data for a spectrum of commercial applications.</Box>
                        <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Data Insight & Analytics As-a-Service through Platform & API
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Multi Mission Planning & Tasking & Visualization Platform
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Guaranteed collection, Fastest tasking, Secure downlink
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                24/7 all weather Surveillance using Optical and SAR Constellation
                            </ListItem>
                            <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                    {
                                        spadeIconArray[0]
                                    }
                                </Box>
                                Most Cost-Effective Solution available in Market
                            </ListItem>
                        </UnorderedList>
                        <Flex justifyContent="">
                            <Link to="/contact-us">
                                <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                    Request Demo
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default SpadeFeature