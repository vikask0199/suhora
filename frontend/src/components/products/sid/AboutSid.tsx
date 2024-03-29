import {
    Box,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import theme from "../../../theme";
import { motion } from 'framer-motion';
import { textVarient, textVarientDelayMedium, textvarientOneSecondDelay } from '../../../animation';

type aboutSidCurrentTheme = {
    currentTheme: string;
}

const AnimatedText = motion(Text)


export const AboutSid = ({ currentTheme }: aboutSidCurrentTheme) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box background={backgroundColor}>
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimatedText variants={textVarientDelayMedium} whileInView="show" initial="hidden">
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>SID</Text>
                            </AnimatedText>
                        </Flex>
                        <AnimatedText variants={textvarientOneSecondDelay} whileInView="show" initial="hidden" color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Navigate the unexpected with confidence.
                        </AnimatedText>
                        <AnimatedText textAlign="justify">
                            <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                                SID revolutionizes disaster management and insurance processes through the strategic use of near real-time satellite data. This innovative platform is designed to empower communities and industries with advanced analytical tools, enhancing preparedness and resilience against natural catastrophes.
                            </AnimatedText>
                            <br />
                            <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                                SID harnesses satellite technology to provide continuous observation of Earth's surface, delivering crucial data on environmental changes and potential disaster zones. SID comprises of two Dashboard:
                                Disaster Dashboard: This dashboard serves as a critical tool for emergency response teams, government agencies, and humanitarian organizations. It provides real-time data on natural disasters such as storms, floods, wildfires, and earthquakes.
                            </AnimatedText>
                            <br />
                            <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                                Insurance Dashboard: Tailored for the insurance sector, this dashboard leverages satellite data to revolutionize risk assessment, claims processing, and policy management.
                            </AnimatedText>
                            <br />
                            <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                                Beyond immediate disaster response, SID offers invaluable insights for the insurance & Bank sector, enhancing risk evaluation and policy customization based on dynamic environmental data. It stands as a testament to the power of technology in building a safer, more prepared world.
                            </AnimatedText>
                        </AnimatedText>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}