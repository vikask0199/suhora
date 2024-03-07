// import { SVGProps } from 'react';
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
import mining_site from '../../assets/img/industries/mining_Site_Selection_for_the_Mining_Industry.webp'
import mining_monitoring from '../../assets/img/industries/mining_Infrastructure_MonitoringPlanning.webp'
import mining_env from '../../assets/img/industries/mining_HighResolutionDigital3DMap.webp'
import mining_asset from '../../assets/img/industries/mining_Infrastructure_MonitoringPlanning.webp'
import mining_remote from '../../assets/img/industries/mining_Accurate_Volumetric_Analysis.webp'
import { motion } from 'framer-motion';
import { textVarient } from '../../animation';

const AnimateText = motion(Text)
const AnimateBox = motion(Box)

interface IFeature {
    heading: string;
    content: string;

}

const features: IFeature[] = [
    {
        heading: 'Site Selection',
        // content: 'Our custom designed automated algorithm analyzing terrain, geology, and environmental factors to optimize resource extraction and minimize ecological impact.',
        content: 'Optimize resource extraction and minimize ecological impact with our automated algorithm.',

    },
    {
        heading: 'High Resolution Satellite Imagery',
        // content: 'We offer very high resolution satellite imagery for regular monitoring of mining sites.',
        content: "Access very high-resolution satellite imagery for regular monitoring of mining sites.",
    },
    {
        heading: 'High Resolution Digital 3D Map',
        content: 'Access to high resolution DEM (50cm) resolution to enhance infrastructure monitoring and planning efforts.',
    },
    {
        heading: 'Monitoring & Planning',
        content: 'Enhance your monitoring and planning processes with our infrastructure-focused solutions.',

    },
    {
        heading: 'Accurate Volumetric Analysis',
        content: 'Achieve unparalleled precision in your analysis with our advanced volumetric analysis tools.',

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

const MiningCards = ({ currentTheme }: HomeServices) => {
    const iconArray = [mining_site, mining_monitoring, mining_env, mining_asset, mining_remote];
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box width="100%" background={backgroundColor}>
            <Container maxW="6xl" py={{ base: '4', md: '8', lg: '12' }}>
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimateText variants={textVarient} whileInView="show" initial="hidden" >
                            <Text as="span">What We </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>offer</Text>
                        </AnimateText>
                    </Flex>
                    <AnimateText variants={textVarient} whileInView="show" initial="hidden" fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Unleashing Mining Excellence with Satellite Technology!
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

export default MiningCards;