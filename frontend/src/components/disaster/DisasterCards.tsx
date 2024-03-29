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
import b2b from '../../assets/img/industries/disaster-b2b.webp'
import disaster from '../../assets/img/industries/Disaster-Monitoring.webp'
import DisasterProcessing from '../../assets/img/industries/Disaster-processing.webp'
import RiskManagement from '../../assets/img/industries/Risk-management.webp'
import TailoredInsurance from '../../assets/img/industries/Tailored-insurance.webp'

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
        heading: 'Comprehensive Disaster Monitoring',
        content: 'Our platform leverages multi source satellite imagery and ground data to monitor and predict disaster events providing a full-scale overview for proactive management.',
    },
    {
        heading: 'Risk Assessment & Management',
        // content: 'We utilize predictive analytics to assess disaster risks accurately, aiding insurers and stakeholders in developing effective management strategies.',
        content: "Leverage predictive analytics for accurate disaster risk assessment, assisting insurers and stakeholders in formulating effective management strategies.",
    },
    {
        heading: 'Post-Disaster Analysis and Claims Processing',
        content: "Suhora's rapid analysis tools evaluate disaster impacts precisely, streamlining the insurance claims process for swift recovery support.",

    },
    {
        heading: 'B2B API Integration for Seamless Data Access',
        content: 'Our robust API framework facilitates seamless integration with business platforms, enabling access to near real-time disaster data and analytics.',

    },
    {
        heading: 'Tailored Insurance Solutions',
        content: 'We offer custom insurance solutions powered by satellite based data and intelligence, providing insurers with the data needed for policy customization and risk mitigation.',

    },

];

type HomeServices = {
    currentTheme: string
}

const DisasterCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [disaster, RiskManagement, DisasterProcessing, b2b, TailoredInsurance]
    // const iconArray = [servilliance, integrated, dataSecurity, tailored, terrains, maritime]
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" background={backgroundColor}>
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                            <Text as="span">What We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Offer</Text>
                        </AnimateText>
                    </Flex>
                    <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Transforming disaster management with satellite based insights
                    </AnimateText>
                </Stack>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
                    {features.map((feature, index) => (
                        <AnimateBox
                            variants={textVarient} whileInView="show" initial="hidden"
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

export default DisasterCards;