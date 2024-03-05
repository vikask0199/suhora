import {
    Box,
    Container,
    Flex,
    // Link,
    SimpleGrid,
    Stack,
    Text,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';

import { GiFuelTank, GiModernCity } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import theme from '../../../theme';


interface IFeature {
    heading: string;
    content: string;
}

const features: IFeature[] = [
    {
        heading: 'Solar Projects',
        // content: 'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',
        content: "Leveraging satellite insights to expedite the launch of solar projects.",
    },
    {
        heading: ' Oil & gas',
        // content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
        content: "Streamlining operational processes with satellite-derived data integration.",
    },
    {
        heading: 'City Planning',
        // content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
        content: "Satellite data integration enhances city planning for better decision-making.",
    }
];


const HydrologyUsacases = () => {
    const iconArray = [<MdSolarPower />, <GiFuelTank />, <GiModernCity />]


    return (
        <Box width="100%" py={{ base: '4', md: '8', lg: '16' }}>
            <Container maxW="6xl">
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Hydrology </Text>
                            <Text as="span">Usecases</Text>
                        </Text>
                    </Flex>
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Mitigating flood risks for critical infrastructure worldwide.
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={20}>
                    {features.map((feature, index) => (
                        <Box
                            mb={4}
                            key={index}
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            p={6}
                            rounded="lg"
                            textAlign="center"
                            pos="relative">
                            <Flex
                                p={2}
                                w="max-content"
                                color="white"
                                bgGradient="linear(to-br, #228be6, #15aabf)"
                                rounded="md"
                                marginInline="auto"
                                pos="absolute"
                                left={0}
                                right={0}
                                top="-2.3rem"
                                boxShadow="lg" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} >
                                {iconArray[index]}
                            </Flex>
                            <chakra.h3 fontWeight={theme.fonts.subHeading.weight} fontSize={theme.fonts.subHeading.size} mt={6}>
                                {feature.heading}
                            </chakra.h3>
                            <Text my={4}>
                                {feature.content}
                            </Text>
                            {/* <Link href="#" fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                Learn more →
                            </Link> */}
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default HydrologyUsacases;