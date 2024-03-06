
import {
    Box,
    // Button,
    Container,
    Flex,
    // ListItem,
    Stack,
    Text,
    // UnorderedList
} from '@chakra-ui/react';

// import { RiTyphoonLine } from 'react-icons/ri';
import theme from '../../theme';
// import { RiTyphoonLine } from 'react-icons/ri';




export const DisasterContent = () => {

    // const spadeIconArray = [<RiTyphoonLine />]
    // const aspectRatio = 3 / 3
    // const spadeIconArray = [<RiTyphoonLine />]

    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                {/* <Text as="span">Suhora </Text> */}
                                <Text as="span" color={theme.companyTheme.color.secondry}>Disaster & Insurance </Text>
                                <Text as="span">Solution </Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Multi band high resolution image from numerous satellites
                        </Text>
                        <Text textAlign="justify">
                            We revolutionize disaster management and insurance processes through the strategic use of near real-time (NRT) satellite data and insights. Our innovative platform (SID) is designed to empower communities, governments and industries with advanced analytical tools, enhancing preparedness and resilience against natural catastrophes.
                            <br />
                            <br />
                            SID harnesses satellite technology to provide continuous observation of Earth's surface, delivering crucial data with insights on environmental changes and potential disaster zones.

                            {/* At SUHORA, we're driven by a passion to make the universe's data accessible and actionable for those who need it most. Founded on the principle that space analytics should empower, not overwhelm, we've dedicated ourselves to demystifying satellite data for practical, everyday applications.
                            <br />
                            <br />
                            Our team, a blend of seasoned experts and innovative thinkers, is committed to breaking down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of space data. */}
                        </Text>
                        {/* <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
                            <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    hello java how are you can we work together hello java how are you can we work together hello java how are you can we work together
                                </ListItem>
                            </UnorderedList>
                        </Flex> */}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
} 