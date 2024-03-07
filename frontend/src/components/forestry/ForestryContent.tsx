import {
    Box,
    // Button,
    Container,
    Flex,

    Stack,
    Text,

} from '@chakra-ui/react';
import theme from '../../theme';
import { motion } from 'framer-motion';
import { textVarient, textVarientDelayMedium, textVarientSecond } from '../../animation';
// import { RiTyphoonLine } from 'react-icons/ri';

const AnimateText = motion(Text)


export const ForestryContent = () => {
    // const aspectRatio = 3 / 3

    return (
        <Box >
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                                <Text as="span" color={theme.companyTheme.color.secondry}>Forestry </Text>
                                <Text as="span">Solution</Text>
                            </AnimateText>
                        </Flex>
                        <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Leading the Charge in Global Forest Monitoring Solutions
                        </AnimateText>
                        <AnimateText variants={textVarientDelayMedium} whileInView="show" initial="hidden" textAlign="justify">
                            Global forest monitoring solutions, which collaborates with reliable partners to employ cutting-edge technologies for the monitoring and conservation of forests worldwide.
                            Through strategic alliances and innovative approaches, Suhora has the capability to monitor large swaths of forested areas, enabling near real-time assessment of their health, detecting encroachment, and identifying instances of deforestation.

                            <br />
                            <br />
                            By harnessing the power of remote sensing and artificial intelligence, Suhora offers a comprehensive solution for forest monitoring and conservation.  Suhora can identify areas at high risk of deforestation or degradation, enabling targeted interventions to prevent further loss of forest cover.
                        </AnimateText>

                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}