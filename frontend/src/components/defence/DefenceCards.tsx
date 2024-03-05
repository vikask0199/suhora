import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';

import dataSecurity from "../../assets/img/industries/DataSecurity.webp";
import integrated from "../../assets/img/industries/IntegratedGlobalView.webp";
import maritime from "../../assets/img/industries/MaritimeDomainAwareness.webp";
import servilliance from "../../assets/img/industries/Surveillance_Intelligence.webp";
import tailored from "../../assets/img/industries/Tailored.webp";
import terrains from "../../assets/img/industries/terrains.webp";
import theme from '../../theme';


interface IFeature {
    heading: string;
    content: string;
}

const features: IFeature[] = [
    {
        heading: 'Surveillance & Intelligence',
        content: 'We leverage state-of-the-art imagery, EO, and SIGINT for superior surveillance and swift defense insights, covering both maritime and terrestrial domains.',

    },
    {
        heading: 'Integrated Global View',
        content: 'Suhora’s powerful fusion Engine of optical, SAR, thermal, AIS, and RF data to deliver a unified perspective on worldwide activities.',
    },
    {
        heading: 'Data Security',
        content: 'We commit the highest level of intelligence protection with our robust encryption protocols for all communications.',

    },
    {
        heading: 'Tailored Intelligence Solutions',
        content: 'Advanced and futuristic analytical tools, integrating diverse data streams and heterogeneous gathered information for precise defense and intelligence applications combat.',

    },
    {
        heading: 'Terrain Situational Awareness',
        content: 'Our Advanced ISR capabilities offer precise monitoring, analysis of diverse terrains via high-res satellite imagery, AI augmentation, empowering strategic planning and security.',

    },
    {
        heading: 'Maritime Domain Awareness',
        content: 'Maritime surveillance solutions provide real-time tracking, threat detection, and security enhancement, meeting evolving operational demands through continuous innovation.',

    },
];

type HomeServices = {
    currentTheme: string
}

const DefenceCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [servilliance, integrated, dataSecurity, tailored, terrains, maritime]
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" background={backgroundColor}>
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span">What We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Offer</Text>
                        </Text>
                    </Flex>
                    {/* <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Everything you need to build modern UI and great products.
                    </Text> */}
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            p={6}
                            rounded="lg"
                            textAlign="center"
                            pos="relative">
                            <Flex
                                p={1}
                                w="max-content"
                                color="white"
                                // bgGradient="linear(to-br, #228be6, #15aabf)"
                                rounded="lg"
                                marginInline="auto"
                                pos="absolute"
                                left={0}
                                right={0}
                                top="-2.5rem"
                            // boxShadow="xl"
                            >
                                <img src={`${iconArray[index]}`} alt="" height="70" width="70" />
                            </Flex>
                            <chakra.h3 fontWeight="semibold" fontSize={theme.fonts.subHeadingSecond.size} mt={5}>
                                {feature.heading}
                            </chakra.h3>
                            <Text fontSize="md" mt={4}>
                                {feature.content}
                            </Text>
                            {/* <Link href="#" mt={6} fontSize="sm" color="blue.400">
                                Learn more →
                            </Link> */}
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default DefenceCards;