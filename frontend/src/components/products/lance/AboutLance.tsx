import {
    Box,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import theme from "../../../theme";

type aboutCurrentTHeme = {
    currentTheme: string;
}


export const AboutLance = ({ currentTheme }: aboutCurrentTHeme) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box background={backgroundColor}>
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>LANCE</Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            See beyond the horizon. Advanced SAR & Optical imagery for critical ISR missions.
                        </Text>
                        <Text textAlign="justify">
                            In the rapidly evolving defense sector, LANCE emerges as a groundbreaking fusion of human expertise and artificial intelligence, reshaping strategic operations. This advanced ISR platform offers real-time insights, allowing defense and intelligence agencies to transition from reactive to proactive strategies, ensuring critical targets are never missed.
                            <br />
                            <br />
                            Equipped with high-definition sensors and smart algorithms, LANCE cuts through complex data, providing actionable intelligence for both maritime and land surveillance. It enhances operational effectiveness, offering a 360-degree view of any scenario, making it an essential tool for national security.
                            <br />
                            <br />
                            Designed for versatility, LANCE integrates AI's analytical power with strategic foresight, delivering unparalleled situational awareness. This synergy between technology and human judgment not only sets a new benchmark in defense readiness but also ensures a more secure, strategically prepared world.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}