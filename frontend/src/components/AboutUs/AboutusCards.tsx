import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

import theme from '../../theme'
import { Stat } from './AboutStats'
import { FaSatellite } from "react-icons/fa";

import { MdOutlineDesignServices } from "react-icons/md";
import { SiFastify } from "react-icons/si";
import { FaTimeline } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { textVarient, textVarientDelayMedium, textVarientSecond } from '../../animation';

const AboutusCards = () => {
    const AnimatedText = motion(Text)
    const AnimatedFlex = motion(Flex)
    const arrayIcon = [< FaSatellite />, <MdOutlineDesignServices />, <SiFastify />, <FaTimeline />]


    return (
        <Container py={{ base: '16', md: '12' }} maxW="6xl">
            <Stack spacing={{ base: '12', md: '14' }} alignItems="stretch">
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimatedText variants={textVarient} whileInView="show" initial="hidden">
                            <Text as="span">Our </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Capabilities </Text>
                        </AnimatedText>
                    </Flex>
                    <AnimatedText fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center" variants={textVarientSecond} whileInView="show" initial="hidden">
                        Insight. Delivered. Realtime
                    </AnimatedText>
                </Stack>
                <Stack spacing="8" direction={{ base: 'column', md: 'row' }} >
                    {stats.map((stat, id) => (
                        <AnimatedFlex flexDirection="column" alignItems="center" textAlign="center" gap={4} variants={textVarientDelayMedium} whileInView="show" initial="hidden">
                            <Box width="fit-content" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} color={theme.aboutIcon.secondry}>
                                {arrayIcon[id]}
                            </Box>
                            <Stat key={stat.label} {...stat} />
                        </AnimatedFlex>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )

}
export default AboutusCards
export const stats = [
    {
        label: 'Sattelite Data',
        description: 'We harness the power of satellite data to gather valuable information and insights from space, enabling informed decision-making',
        value: '',
        cta: 'Learn More',
        link: '/gallery'
    },
    {
        label: 'Tailored Services',
        description: 'Our tailored services cater to the unique needs of each client, ensuring that they receive customized solutions that meet their specific requirements',
        value: '',
        cta: 'Learn More',
        link: '/services'
    },
    {
        label: 'Fastest Processing',
        description: "With our state-of-the-art technology and skilled team, we offer the fastest processing times, allowing our clients to access critical information promptly",
        value: '',
        cta: 'Learn More',
        link: '/spade'
    },
    {
        label: 'Near Real Time Insights',
        description: "Leveraging advanced analytics techniques, we deliver near real-time insights, enabling our clients to stay ahead of the curve and make timely decisions",
        value: '',
        cta: 'Learn More',
        link: "/spade"
    },

]