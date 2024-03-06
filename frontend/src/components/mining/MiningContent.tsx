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

import theme from '../../theme';
// import { RiTyphoonLine } from 'react-icons/ri';



export const MiningContent = () => {
    // const aspectRatio = 3 / 3
    // const spadeIconArray = [<RiTyphoonLine />]

    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                               
                                <Text as="span" color={theme.companyTheme.color.secondry}>Mining  </Text>
                                <Text as="span">Solution </Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Beyond Boundaries Satellite driven Mining Excellence
                        </Text>
                        <Text textAlign="justify">
                            Suhora harnessed advanced satellite technology with Machine Learning capabilities
                            allowing mining companies to identify promising mineral deposits, monitor and manage mining activities like Site selection, Infrastructure monitoring and planning, Resource estimation, Environmental Impact, Safety and risk management with unprecedented precision.

                            {/* Suhora stands at the forefront of the solar industry, offering unparalleled consulting and design services to clients seeking to harness the power of solar energy for their projects.
                            <br />
                            <br />
                            Through the utilization of an advanced auto-layout generation platform, Suhora empowers its customers to streamline their design processes, saving valuable time and resources across multiple iterations. */}
                        </Text>
                        {/* <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
                            <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    One of the key advantages of Suhora's auto-layout generation platform is its ability to facilitate quick and efficient design iterations.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    This not only accelerates the design phase but also ensures that projects are optimized for efficiency and performance from the outset.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Suhora's design approach leads to more accurate calculations of project financing.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Suhora helps clients mitigate risks associated with water-related hazards and ensure the long-term resilience of their projects.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Suhora empowers clients to unlock the full potential of solar energy while ensuring the reliability, resilience, and sustainability of their projects.
                                </ListItem>

                            </UnorderedList>
                        </Flex> */}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
} 











