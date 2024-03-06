import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { stats } from '../../../constant/whatsWeDoData'
import theme from '../../../theme'
import { Stat } from './Stat'
import { MdDesignServices, MdInsights, MdSatelliteAlt } from 'react-icons/md'
import { IoIosFlash } from 'react-icons/io'
import { motion } from 'framer-motion'
import { boxVariant, textVarient } from '../../../animation'

export const WhatWeDo = () => {

    const arrayIcon = [<MdSatelliteAlt />, <MdDesignServices />, <IoIosFlash />, <MdInsights />]

    const AnimateText = motion(Text)
    const AnimateFlex = motion(Flex)

    return (
        <Container py={{ base: '16', md: '12' }} maxW="6xl">
            <Stack spacing={{ base: '12', md: '14' }} alignItems="stretch">
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                            <Text as="span" color={theme.companyTheme.color.secondry}>What </Text>
                            <Text as="span">We Do</Text>
                        </AnimateText>
                    </Flex>
                    <AnimateText variants={textVarient} whileInView="show" initial="hidden"  fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        {/* Everything you need to build modern UI and great products. */}
                        Unlocking Space Data for Practical Insights
                    </AnimateText>
                </Stack>
                <Stack spacing="8" direction={{ base: 'column', md: 'row' }} >
                    {stats.map((stat, id) => (
                        <AnimateFlex variants={boxVariant} whileInView="show" initial={"hidden"} flexDirection="column" alignItems="center" textAlign="center" gap={4} >
                            <Box width="fit-content" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} color={theme.aboutIcon.secondry}>
                                {arrayIcon[id]}
                            </Box>
                            <Stat key={stat.label} {...stat} />
                        </AnimateFlex>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )

}