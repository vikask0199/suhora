import { SVGProps } from 'react';
import {
    Container,
    Box,
    chakra,
    Text,
    SimpleGrid,
    Flex,
    // Link,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';

// import { MdPayment } from 'react-icons/md';
// import { FaFileInvoiceDollar } from 'react-icons/fa';
// import { FaFileCode } from 'react-icons/fa';
import theme from '../../theme';
import infra_site from '../../assets/img/industries/infra_site_selection.webp'
import infra_monitoring from '../../assets/img/industries/infra_monitoring_constructionProgress.webp'
import infra_env from '../../assets/img/industries/infra_environmental_impactAssessment.webp'
import infra_asset from '../../assets/img/industries/infra_infrastructure_assetManagement.webp'
import infra_remote from '../../assets/img/industries/infra_remote_monitoringandInspection.webp'

interface IFeature {
    heading: string;
    content: string;
    
}

const features: IFeature[] = [
    {
        heading: 'Site Selection and Planning',
        content: 'Our satellite imagery aids informed decision-making in infrastructure site selection by assessing terrain, resources, and environmental factors.',
 
    },
    {
        heading: 'Monitoring Construction Progress',
        content: 'Track construction progress with multi-resolution satellite imagery, ensuring adherence to timelines and efficient resource management.',
 
    },
    {
        heading: 'Environmental Impact Assessment',
        content: 'Evaluate ecological consequences with analysis of land cover, vegetation, and water bodies over time using our SPADE platform.',

    },
    {
        heading: 'Infrastructure Asset Management',
        content: 'Manage infrastructure assets effectively with regular high-resolution satellite image capture, enabling condition assessment and prioritization of repair activities.',

    },
    {
        heading: 'Remote Monitoring and Inspection',
        content: 'Enable remote inspection of inaccessible infrastructure assets with multi-temporal satellite imagery, minimizing safety risks and ensuring continuous monitoring.',

    },
    // {
    //     heading: 'API Included',
    //     content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    //     icon: (

    //         <Box fontSize={theme.fonts.mainHeading.size}>
    //             <FaFileCode />
    //         </Box>
    //     )
    // },
];

type HomeServices = {
    currentTheme: string
}

const InfrastructureCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [infra_site, infra_monitoring, infra_env, infra_asset, infra_remote];
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
                    Elevating Infrastructure Monitoring with AI-Powered Insights
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

export default InfrastructureCards;