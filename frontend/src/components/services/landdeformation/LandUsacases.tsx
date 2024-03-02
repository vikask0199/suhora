import {
    Box,
    Container,
    Flex,
    Link,
    SimpleGrid,
    Stack,
    Text,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';

import { FaTreeCity } from "react-icons/fa6";
import { GiFuelTank, GiHorizonRoad, GiMining } from "react-icons/gi";
import { MdFlood } from "react-icons/md";
import theme from '../../../theme';


interface IFeature {
    heading: string;
    content: string;
}

const features: IFeature[] = [
    {
        heading: 'Disaster',
        content: 'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',

    },
    {
        heading: 'Urban Planning,',
        content: 'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
    },
    {
        heading: 'Oil & Gas',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    },
    {
        heading: 'infrastructure',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    },
    {
        heading: 'Mining',
        content: 'Roll your own API to easily connect with other apps or services. Pull in updates.',
    },
];


const LandUsacases = () => {
    const iconArray = [<MdFlood />, <FaTreeCity />, <GiFuelTank />, <GiHorizonRoad />, <GiMining />]


    return (
        <Box width="100%">
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Land Deformation </Text>
                            <Text as="span">Usecases</Text>
                        </Text>
                    </Flex>
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Mapping Earth's shifts, informing decisions with millimeter precision.
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
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
                            <Link href="#" fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                                Learn more →
                            </Link>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default LandUsacases;