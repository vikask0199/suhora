
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



export const DefenceContent = () => {
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
                                <Text as="span" color={theme.companyTheme.color.secondry}>Defence & Intelligence </Text>
                                <Text as="span">Solution </Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                               Adapts to your mission. Scales to your needs.
                        </Text>
                        <Text textAlign="justify">
                        Our commitment to enhancing defense and intelligence capabilities through advanced surveillance, global data fusion from SAR, Optical, Thermal, RF & AIS unparalleled data security, and tailored analytical solutions.
                        {/* Suhora plays a vital role in bolstering national defense and homeland security through its provision of advanced monitoring and analytics solutions. At the core of Suhora's offerings is the encrypted EarthData platform, a cutting-edge system designed to meet the rigorous demands of defense and security operations.
                            <br />
                            <br />
                            The EarthData platform serves as a centralized hub for storing, accessing, and analyzing critical geospatial information essential for national defense and homeland security.  */}
                        </Text>
                        <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
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
                        </Flex>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
} 