
import {
    Box,
    Container,
    Flex,
    Stack,
    StackDivider,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineSatelliteAlt } from 'react-icons/md';

import { TbWorldDollar } from 'react-icons/tb';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { stats } from '../../../constant/aboutSuhoraData';
import theme from "../../../theme";
import { Stat } from './Stat';
import { motion } from 'framer-motion';

const AnimatedFlex = motion(Flex)

interface aboutSuhoraProps {
    currentTheme: string
}

export const AboutSuhora = ({ currentTheme }: aboutSuhoraProps) => {
    const arrayIcon = [<MdOutlineSatelliteAlt />, <TiWeatherPartlySunny />, <FaRegClock />, <TbWorldDollar />]
    const isMobile = useBreakpointValue({ base: true, md: false })
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    

    return (
        <Box background={backgroundColor}>
            <Container py={{ base: '16', md: '12' }} maxW="6xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <AnimatedFlex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
                            <Text>
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>Suhora</Text>
                            </Text>
                        </AnimatedFlex>
                        <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Space Analytics Simplified
                        </Text>
                        <Text textAlign="justify">
                            At SUHORA, we're driven by a passion to make the universe's data accessible and actionable for those who need it most. Founded on the principle that space analytics should empower, not overwhelm, we've dedicated ourselves to demystifying satellite data for practical, everyday applications.
                            <br />
                            <br />
                            Our team, a blend of seasoned experts and innovative thinkers, is committed to breaking down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of space data.
                        </Text>
                    </Stack>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        maxW="6xl"
                        width="full"
                        justifyContent="space-between"
                        gap={7}
                        {...(!isMobile ? { divider: <StackDivider /> } : {})}>
                        {stats.map((stat, id) => (
                            <Flex flexDirection="column" alignItems="center" gap={4}>
                                <Box width="fit-content" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} color={theme.aboutIcon.secondry}>
                                    {arrayIcon[id]}
                                </Box>
                                <Stat key={id} flex="1" {...stat} />
                            </Flex>
                        ))}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    )
}