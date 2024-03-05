import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    chakra,
    // Link,
    useColorModeValue
} from '@chakra-ui/react';

import agri_satellite from '../../assets/img/industries/Agri_Satellite_Imagery.webp';
import agri_acreage from '../../assets/img/industries/agri_Acreage_Estimation.webp';
import agri_crop from '../../assets/img/industries/agri_Crop_Health.webp';
import agri_lband from '../../assets/img/industries/agri_LBand_SAR.webp';
import agri_ndvi from '../../assets/img/industries/agri_NDVI.webp';
import theme from '../../theme';

interface IFeature {
    heading: string;
    content: string;

}

const features: IFeature[] = [
    {
        heading: 'Satellite Imagery (Optical)',
        // content: 'We are capable of delivering daily satellite imagery of your AOI.',
        content: "Unlock daily access to high-resolution satellite imagery of your Area of Interest (AOI) effortlessly.",

    },
    {
        heading: 'L Band SAR Imagery',
        // content: 'Suhora offers any weather L band SAR satellite imagery.',
        content: "Discover comprehensive L band SAR satellite imagery options suitable for all weather conditions.",

    },
    {
        heading: 'NDVI',
        // content: 'Our platform SPADE generates on the fly NDVI & delivers to the customer on their purchased optical data.',
        content: "Leverage our SPADE platform to generate NDVI on demand, seamlessly integrated purchased optical data.",

    },
    {
        heading: 'Acreage Estimation',
        // content: 'We provide very accurate acreage estimates of any corps in India.',
        content: "Obtain precise acreage estimates for crops across India, facilitating informed decision-making.",

    },
    {
        heading: 'Crop Health',
        // content: 'To ensure the maximum yield for crops periodic crop health monitoring is very important we offer week, fortnight and monthly crop health reports through our platform SPADE.',
        content: "Enhance crop productivity with regular health monitoring reports available weekly, fortnightly, and monthly via SPADE.",

    },

];

type HomeServices = {
    currentTheme: string
}

const AgricultureCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [agri_satellite, agri_lband, agri_ndvi, agri_acreage, agri_crop];
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
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Harvest Optimization Powered by Satellite Data: Maximize Yield, Minimize Risk.
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            p={6}
                            rounded="lg"
                            textAlign="center"
                            pos="relative"
                        >
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
                            <chakra.h3 fontWeight="semibold" fontSize={theme.fonts.subHeadingSecond.size} mt={6}>
                                {feature.heading}
                            </chakra.h3>
                            <Text fontSize="md" mt={4}>
                                {feature.content}
                            </Text>
                            {/* <Link href="#" mt={4} fontSize="sm" color="blue.400">
                                Learn more →
                            </Link> */}
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AgricultureCards;