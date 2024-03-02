
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



export const ForestryContent = () => {
    const aspectRatio = 3 / 3
    const spadeIconArray = [<RiTyphoonLine />]

    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">Our </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>Offering</Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                        From Space to Safety: Satellite Insight for Fire-Free Forests.
                        </Text>
                        <Text textAlign="justify">
                        One of the key players in this endeavor is Suhora, which collaborates with reliable partners to employ cutting-edge technologies for the monitoring and conservation of forests worldwide.
                            <br />
                            <br />
                            Through strategic alliances and innovative approaches, Suhora has the capability to monitor large swaths of forested areas, enabling real-time assessment of their health, detecting encroachment, and identifying instances of deforestation.
                        </Text>
                        <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
                            <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                                
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    By harnessing the power of remote sensing and artificial intelligence, Suhora offers a comprehensive solution for forest monitoring and conservation.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    Suhora can identify areas at high risk of deforestation or degradation, enabling targeted interventions to prevent further loss of forest cover.
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
                        </Flex>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
} 