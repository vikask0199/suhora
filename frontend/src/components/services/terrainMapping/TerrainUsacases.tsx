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

import { FaDiagramProject } from "react-icons/fa6";
import { GiFlood, GiHeavyThornyTriskelion } from "react-icons/gi";
import { GrPlan } from "react-icons/gr";
import theme from '../../../theme';


interface IFeature {
    heading: string;
    content: string;
}

const features: IFeature[] = [
    {
        heading: 'City Planning',
        content: 'Shaping cities with precise data and innovative planning strategies.',

    },
    {
        heading: 'Risk Mitigation',
        content: 'Mitigating risks through advanced data analytics and strategic solutions.',
    },
    {
        heading: 'Flood forecasting',
        content: 'Empowering flood forecasting with precision data.',
    },
    {
        heading: 'Project planning',
        content: "Empower your project planning with Suhora's precise 3D elevation data.",
    },
];


const TerrainUsacases = () => {
    const iconArray = [<GrPlan />, <GiHeavyThornyTriskelion />, <GiFlood />, <FaDiagramProject />]


    return (
        <Box width="100%">
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Terrain </Text>
                            <Text as="span">Usecases</Text>
                        </Text>
                    </Flex>
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                    Elevating decisions with precision in 3D terrain solutions.
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} placeItems="center" spacing={10} mb={4} mt={12}>
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

export default TerrainUsacases;