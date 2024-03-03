import { SVGProps } from 'react';
import {
    Container,
    Box,
    chakra,
    Text,
    SimpleGrid,
    Flex,
    Link,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';

import { MdPayment } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import theme from '../../theme';


interface IFeature {
    heading: string;
    content: string;
    icon: SVGProps<SVGElement>;
}

const features: IFeature[] = [
    {
        heading: 'Comprehensive Disaster Monitoring',
        content: 'Our platform leverages multispectral satellite imagery and ground data to monitor and predict disaster events, providing a full-scale overview for proactive management.',
        icon: (
            <Box fontSize={theme.fonts.mainHeading.size}>
                <MdPayment />
            </Box>
        )
    },
    {
        heading: 'Risk Assessment & Management',
        content: 'We utilize predictive analytics to assess disaster risks accurately, aiding insurers and stakeholders in developing effective management strategies.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileInvoiceDollar />
            </Box>
        )
    },
    {
        heading: 'Post-Disaster Analysis and Claims Processing',
        content: 'Suhora’s rapid analysis tools evaluate disaster impacts precisely, streamlining the insurance claims process for swift recovery support.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'B2B API Integration for Seamless Data Access',
        content: 'Our robust API framework facilitates seamless integration with business platforms, enabling access to real-time disaster data and analytics.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'Tailored Insurance Solutions',
        content: 'We offer custom insurance solutions powered by satellite intelligence, providing insurers with the data needed for policy customization and risk mitigation.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
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

const DisasterCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [<MdPayment />, <FaFileInvoiceDollar />, <FaFileCode />,<MdPayment />, <FaFileInvoiceDollar />, <FaFileCode />]
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
                        Everything you need to build modern UI and great products.
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
                                p={2}
                                w="max-content"
                                color="white"
                                bgGradient="linear(to-br, #228be6, #15aabf)"
                                rounded="md"
                                marginInline="auto"
                                pos="absolute"
                                left={0}
                                right={0}
                                top="-1.5rem"
                                boxShadow="lg">
                                {iconArray[index]}
                            </Flex>
                            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                                {feature.heading}
                            </chakra.h3>
                            <Text fontSize="md" mt={4}>
                                {feature.content}
                            </Text>
                            <Link href="#" mt={4} fontSize="sm" color="blue.400">
                                Learn more →
                            </Link>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default DisasterCards;