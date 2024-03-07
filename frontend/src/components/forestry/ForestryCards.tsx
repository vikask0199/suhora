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

import forestry_forest_fire from '../../assets/img/industries/Forest_Fire.webp';
import forestry_forest_health from '../../assets/img/industries/Forest_Health_Monitoring.webp';
import forestry_deforestation from '../../assets/img/industries/Forestry_Deforestation_Monitoring.webp';
import forestry_forest_productivity from '../../assets/img/industries/forest_productivity_monitoring.webp';
import forestry_tree_species from '../../assets/img/industries/forestry_Tree_Species_Identification.webp';
import theme from '../../theme';
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../animation';

const AnimateText = motion(Text)
const AnimateBox = motion(Box)


interface IFeature {
    heading: string;
    content: string;

}

const features: IFeature[] = [
    {
        heading: 'Deforestation Monitoring',
        content: 'Suhora employs advanced technologies to track and analyze deforestation activities in real-time, enabling timely interventions to mitigate further forest loss.',

    },
    {
        heading: 'Forest Fire Monitoring',
        content: 'Utilizing remote sensing and AI, Suhora detects and monitors forest fires, providing early warning systems and facilitating rapid response efforts to minimize damage.',

    },
    {
        heading: 'Forest Productivity Monitoring',
        content: 'Suhora assesses the productivity of forests through remote sensing data, offering insights into forest growth rates, carbon footprinting, and overall ecosystem health.',

    },
    {
        heading: 'Forest Health Monitoring',
        content: 'Suhora conducts ongoing analysis to assess forest health, identifying threats like diseases, invasive species, and environmental stressors for ecosystem stability.',

    },
    {
        heading: 'Tree Species Indentification',
        content: 'Using advanced image analysis techniques, cataloging of tree species within forested areas, facilitating biodiversity assessments and conservation planning initiatives.',

    },

];

type HomeServices = {
    currentTheme: string
}

const ForestryCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [forestry_deforestation, forestry_forest_fire, forestry_forest_productivity, forestry_forest_health, forestry_tree_species];
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" background={backgroundColor}>
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                            <Text as="span">What We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Serve</Text>
                        </AnimateText>
                    </Flex>
                    <AnimateText variants={textVarient} whileInView="show" initial="hidden"  fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Driving Conservation Efforts Through Cutting-Edge Forest Monitoring
                    </AnimateText>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
                    {features.map((feature, index) => (
                        <AnimateBox
                            variants={textVarientSecond} whileInView="show" initial="hidden"
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
                            <Text fontSize="md" mt={4} textAlign="justify">
                                {feature.content}
                            </Text>
                            {/* <Link href="#" mt={4} fontSize="sm" color="blue.400">
                                Learn more →
                            </Link> */}
                        </AnimateBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ForestryCards;