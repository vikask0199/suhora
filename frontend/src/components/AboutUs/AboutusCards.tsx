import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

import theme from '../../theme'
import { Stat } from './AboutStats'
import { FaSatellite } from "react-icons/fa";

import { MdOutlineDesignServices } from "react-icons/md";
import { SiFastify } from "react-icons/si";
import { FaTimeline } from "react-icons/fa6";
 const AboutusCards = () => {

    const arrayIcon = [< FaSatellite /> , <MdOutlineDesignServices /> ,<SiFastify/>, <FaTimeline/> ]


    return (
        <Container py={{ base: '16', md: '12' }} maxW="6xl">
            <Stack spacing={{ base: '12', md: '14' }} alignItems="stretch">
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            
                            <Text as="span">Our </Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Technologies </Text>
                        </Text>
                    </Flex>
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                    Insight. Delivered. Realtime
                    </Text>
                </Stack>
                <Stack spacing="8" direction={{ base: 'column', md: 'row' }} >
                    {stats.map((stat, id) => (
                        <Flex flexDirection="column" alignItems="center" textAlign="center" gap={4}>
                            <Box width="fit-content" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} color={theme.aboutIcon.secondry}>
                                {arrayIcon[id]}
                            </Box>
                            <Stat key={stat.label} {...stat} />
                        </Flex>
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
      description: 'One of the fastest growing headless UI libraries in the world',
      value: '',
     cta: '',
    },
    {
      label: 'Tailored Services',
      description: 'Appreciated by developers for its simplicity and flexibility and data',
      value: '',
      cta: '',
    },
    {
      label: 'Fastest Processing',
      description: "A team of talented and passionate developers ready to help",
      value: '',
      cta: '',
    },
    {
        label: 'Near Real Time Insights',
        description: "Join our friendly and helpful developer community on Discord",
        value: '',
        cta: '',
      },
   
  ]