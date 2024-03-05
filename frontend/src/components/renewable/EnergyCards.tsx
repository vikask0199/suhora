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

import { MdPayment } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import theme from '../../theme';
import renew_site_assessment from '../../assets/img/industries/renew_Site_Assessment_Selection.webp'
import renew_environment from '../../assets/img/industries/renew_Environmental_Impact_Analysis.png'
import renew_infra from '../../assets/img/industries/renew_Infrastructure_Monitoring.webp'
import renew_resource from '../../assets/img/industries/renew_Resource_Optimization.webp'
import renew_project from '../../assets/img/industries/renew_Project_Development_Support.webp'

interface IFeature {
    heading: string;
    content: string;
   
}

const features: IFeature[] = [
    {
        heading: 'Site Assessment & Selection',
        content: 'Optimize site selection with our comprehensive assessment tools.',
    
    },
    {
        heading: 'Environmental Impact Analysis ',
        content: 'Automatically analyze environmental impacts with our integrated analytics.',
 
    },
    {
        heading: 'Infrastructure Monitoring',
        content: 'Seamlessly monitor infrastructure with our custom integrated solutions',
   
    },
    {
        heading: 'Resource Optimization ',
        content: 'Enhance resource utilization with our efficient API solutions.',
 
    },
    {
        heading: 'Project Development Support',
        content: 'Access comprehensive support for project development via our API.',
 
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

const EnergyCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [renew_site_assessment, renew_environment, renew_infra, renew_resource, renew_project];
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
                   Satellite Driven Solar Innovation
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

export default EnergyCards;