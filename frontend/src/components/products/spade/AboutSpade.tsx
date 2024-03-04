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
                            Experience the next level of data insight and analytics with our As-a-Service platform and API, delivering unparalleled convenience and efficiency. Seamlessly integrate our multi-mission planning and tasking features with our powerful visualization platform, empowering you to tackle diverse challenges with ease. With guaranteed collection, fastest tasking, and secure downlink capabilities, rest assured that your data is handled with utmost precision and confidentiality. <br /> <br /> Our 24/7 all-weather surveillance, utilizing both optical and SAR constellation technologies, ensures comprehensive coverage and actionable insights regardless of conditions. And with our commitment to being the most cost-effective solution in the market, you can achieve your goals without breaking the bank. Choose reliability, choose efficiency, choose cost-effectiveness—choose us.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}