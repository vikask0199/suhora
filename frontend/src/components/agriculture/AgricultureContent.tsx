
import {
    Box,
    Button,
    Container,
    Flex,
    ListItem,
    Stack,
    Text,
    UnorderedList
} from '@chakra-ui/react';

import theme from '../../theme';
import { RiTyphoonLine } from 'react-icons/ri';



export const AgricultureContent = () => {
    const aspectRatio = 3 / 3
    const spadeIconArray = [<RiTyphoonLine />]

    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">Suhora </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>Agricukture</Text>
                                <Text as="span">Solution </Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                        Satellite data powered harvest Optimize yield minimize risk
                        </Text>
                        <Text textAlign="justify">
                              Suhora's advanced satellite data analytics platform revolutionizes the assessment of crop health, acreage, yield estimation, and damage assessment, offering invaluable insights for various stakeholders, particularly insurance companies.
                            <br />
                            <br />
                            Crop health assessment lies at the core of Suhora's capabilities. By analyzing various spectral bands and temporal changes in vegetation indices, the platform provides precise information about the health status of crops throughout their growth cycles.This enables farmers, agronomists, and policymakers to make informed decisions regarding irrigation, fertilization, pest control, and overall crop management strategies. 
                        </Text>
                        {/* <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
                            <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    This enables farmers, agronomists, and policymakers to make informed decisions regarding irrigation, fertilization, pest control
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Yield estimation, a crucial metric for both farmers and insurers, is greatly enhanced by Suhora's data analytics.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    In the event of natural disasters Suhora rapidly generates precise damage assessment maps by comparing pre- and post-event satellite imagery. 
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Suhora's sophisticated satellite data analytics platform offers unparalleled capabilities for assessing crop health yield estimation, and damage.
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