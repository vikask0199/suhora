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


interface IFeature {
    heading: string;
    content: string;
    icon: SVGProps<SVGElement>;
}

const features: IFeature[] = [
    {
        heading: 'Site Selection and Planning',
        content: 'Our Satellite imagery aids site selection for infrastructure, assessing terrain, resources, and environmental factors, enhancing informed decision-making in planning.',
        icon: (
            <Box fontSize={theme.fonts.mainHeading.size}>
                <MdPayment />
            </Box>
        )
    },
    {
        heading: 'Monitoring Construction Progress',
        content: 'Suhora’s multi resolution satellite imagery tracks construction progress, ensures timelines adherence, optimizes resource management, and addresses issues promptly for efficient project monitoring.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileInvoiceDollar />
            </Box>
        )
    },
    {
        heading: 'Environmental Impact Assessment',
        content: 'We provide analysis and changes in land cover, vegetation and water bodies over time through our platform SPADE, environmental planners can evaluate the potential ecological consequences and implement mitigation measures accordingly',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'Infrastructure Asset Management',
        content: 'Satellite imagery aids in the ongoing maintenance and management of infrastructure assets. By regularly capturing high-resolution images of infrastructure assets such as roads, bridges, and buildings, stakeholders can assess their condition, identify maintenance needs, and prioritize repair activities.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'Remote Monitoring and Inspection',
        content: 'Our multi temporal satellite imagery enables remote monitoring and inspection of infrastructure assets located in remote or inaccessible areas. This reduces the need for physical site visits, minimizes safety risks for personnel, and ensures continuous monitoring of critical infrastructure.',
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

const InfrastructureCards = ({ currentTheme }: HomeServices) => {
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