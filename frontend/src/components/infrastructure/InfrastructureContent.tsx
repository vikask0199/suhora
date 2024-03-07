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
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../animation';
// import { RiTyphoonLine } from 'react-icons/ri';

const AnimateText = motion(Text)


export const InfrastructureContent = () => {
    // const aspectRatio = 3 / 3
    // const spadeIconArray = [<RiTyphoonLine />]
    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimateText variants={textVarient} whileInView="show" initial="hidden" >
                                <Text as="span" color={theme.companyTheme.color.secondry}>Infrastructure </Text>
                                <Text as="span">Solution </Text>
                            </AnimateText>
                        </Flex>
                        <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden"  color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Sky Built Precision AI Powered Automation
                        </AnimateText>
                        <AnimateText variants={textVarient} whileInView="show" initial="hidden"  textAlign="justify" >
                            Suhora harnessing the vast repository of satellite data, ranging from high-resolution electro optical imagery to SAR (Synthetic Aperture Radar) coupling satellite data with enhanced AI and automation offers unprecedented insights for condition, performance, and dynamics of critical infrastructure assets.
                            <br />
                            <br />
                            Our platform SPADE offers data, processing and analysis capabilities in near-real-time that enable proactive monitoring and early detection of potential issues or anomalies on the ground allowing for timely interventions to prevent costly failures or downtime.
                            {/* Suhora, with its specialized expertise, is poised to develop an all-encompassing command center that serves as the nerve center of a city, overseeing and managing crucial aspects such as the environment, infrastructure, devices, city assets, departmental systems, and more.
                            <br />
                            <br />
                            Urbanization in countries like India brings with it a myriad of challenges, including increased strain on existing infrastructure, heightened demand for essential services, and greater environmental impact. */}
                        </AnimateText>
                        {/* <Flex w="100%" direction="column" rowGap={4} justifyContent="space-between">
                            <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    At the heart of Suhora's command center lies its capability to monitor and manage the urban environment comprehensively.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    This real-time monitoring enables proactive measures to mitigate pollution, safeguard public health, and ensure environmental sustainability.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    This proactive approach to infrastructure management is essential for ensuring the reliability and resilience of urban systems.
                                </ListItem>
                                <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                                    <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                        {
                                            spadeIconArray[0]
                                        }
                                    </Box>
                                    This ensures that relevant stakeholders have access to timely and accurate information, facilitating coordinated responses to emergencies and events.
                                </ListItem>
                            </UnorderedList>
                        </Flex> */}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}






