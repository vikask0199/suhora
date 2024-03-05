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

import dataSecurity from "../../../assets/img/industries/Land_Deformation_Icon.webp";
import integrated from "../../../assets/img/industries/Terrain_Mapping_Icon.webp";

import servilliance from "../../../assets/img/industries/Hydrology_Icon.webp";

import theme from '../../../theme';
import { Link } from 'react-router-dom';
// import { BsBox2 } from 'react-icons/bs';


interface IFeature {
    heading: string;
    content: string;
    link : string;
}

const features: IFeature[] = [
    {
        heading: 'Hydrology',
        content: "At Suhora, our data analysis approach encompasses various facets, including historical satellite images, flood datasets, rainfall, and basin modeling. Additionally, we utilize IDF curves for further insights. ",
        link: "/product-hydrology"
    },
    {
        heading: 'Terrain Mapping',
        content: "Suhora analyzes historical satellite images, flood data, rainfall, and basin models, utilizing IDF curves for insights, enhancing water management solutions collaboratively",
        link: '/product-terrainmapping'
    },
    {
        heading: 'Land Deformation Monitoring',
        content: "Suhora employs a multi-pronged data analysis approach, covering displacement maps, rapid motion, and motion tracking for varied displacement rates.",
        link: "/land-deformation-monitoring"

    },
   
];

type ServicesCards = {
    currentTheme: string
}

const ServicesCards = () => {
    const iconArray = [servilliance, integrated, dataSecurity]
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" >
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span">Our </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Services</Text>
                        </Text>
                    </Flex>
                   
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12} >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            p={6}
                            
                            rounded="lg"
                            textAlign="center"
                            pos="relative"
                            _hover={{ transform: "scale(1.10)",  transitionDuration: '500ms'}} transitionDuration={'500ms'}>
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
                                top="-2.2rem"
                                borderRadius='full'
                            // boxShadow="xl"
                            >
                                <img src={`${iconArray[index]}`} alt="" height="70" width="70" />
                            </Flex>
                         =
                            <chakra.h3 fontWeight="semibold" fontSize="xl" mt={3} >
                                {feature.heading}
                            </chakra.h3>
                            
                            <Text fontSize="md" mt={4}>
                                {feature.content}
                            </Text>
                            <Box  marginTop={4} color={theme.companyTheme.color.secondry}>
                            <Link to={feature.link} >
                                Learn more →
                            </Link>
                            </Box>
                           
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ServicesCards;