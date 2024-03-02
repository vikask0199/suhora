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
        heading: 'Payments',
        content: 'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',
        icon: (
            <Box fontSize={theme.fonts.mainHeading.size}>
                <MdPayment />
            </Box>
        )
    },
    {
        heading: 'Invoicing',
        content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileInvoiceDollar />
            </Box>
        )
    },
    {
        heading: 'API Included',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'API Included',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'API Included',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
    {
        heading: 'API Included',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
        icon: (

            <Box fontSize={theme.fonts.mainHeading.size}>
                <FaFileCode />
            </Box>
        )
    },
];

type HomeServices = {
    currentTheme: string
}

const DefenceCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [<MdPayment />, <FaFileInvoiceDollar />, <FaFileCode />,<MdPayment />, <FaFileInvoiceDollar />, <FaFileCode />]
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" background={backgroundColor}>
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span">What We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Serve</Text>
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

export default DefenceCards;