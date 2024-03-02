import {
    Box,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';
import theme from "../../../theme";



export const AboutSpade = () => {
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box>
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>SPADE</Text>
                            </Text>
                        </Flex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Multi band high resolution image from various satellite.
                        </Text>
                        <Text textAlign="justify">
                            Spade revolutionizes your satellite image acquisition and analysis workflow. Plan and execute multi-sensor missions, with AI-powered suggestions guiding you for optimal efficiency. Source the perfect imagery from a comprehensive marketplace or effortlessly search and order historical data to complement your analysis. Spade ensures a secure platform with encrypted access, giving you peace of mind.
                            <br />
                            <br />
                            Unleash the power of your data with Spade's advanced AI tools. Analyze diverse satellite data formats, extracting valuable insights previously hidden within.  Organize your projects with user-specific workspaces, allowing for seamless collaboration and clear task management. Save, export, and download your findings for further analysis or sharing with colleagues. Spade empowers you to make data-driven decisions with confidence.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}