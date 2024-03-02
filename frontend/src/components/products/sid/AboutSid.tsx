import {
    Box,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import theme from "../../../theme";



export const AboutSid = () => {
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box>
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>SID</Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Navigate the unexpected with confidence.
                        </Text>
                        <Text textAlign="justify">
                            SID revolutionizes disaster management and insurance processes through the strategic use of near real-time satellite data. This innovative platform is designed to empower communities and industries with advanced analytical tools, enhancing preparedness and resilience against natural catastrophes.
                            <br />
                            <br />
                            SID harnesses satellite technology to provide continuous observation of Earth's surface, delivering crucial data on environmental changes and potential disaster zones. SID comprises of two Dashboard:
                            Disaster Dashboard: This dashboard serves as a critical tool for emergency response teams, government agencies, and humanitarian organizations. It provides real-time data on natural disasters such as storms, floods, wildfires, and earthquakes.
                            <br />
                            <br />
                            Insurance Dashboard: Tailored for the insurance sector, this dashboard leverages satellite data to revolutionize risk assessment, claims processing, and policy management.
                            <br />
                            <br />
                            Beyond immediate disaster response, SID offers invaluable insights for the insurance & Bank sector, enhancing risk evaluation and policy customization based on dynamic environmental data. It stands as a testament to the power of technology in building a safer, more prepared world.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}