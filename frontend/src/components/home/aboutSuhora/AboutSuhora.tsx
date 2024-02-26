import {
    Box,
    Container,
    Flex,
    Stack,
    StackDivider,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { stats } from '../../../constant/aboutSuhoraData'
import theme from "../../../theme"
import { Stat } from './Stat'

interface aboutSuhoraProps{
    currentTheme:string
}

export const AboutSuhora = ({currentTheme}:aboutSuhoraProps) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box background={backgroundColor}>
            <Container py={{ base: '16', md: '12' }} maxW="5xl">
                <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
                    <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                <Text as="span">About </Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}>Suhora</Text>
                            </Text>
                        </Flex>
                        <Text fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="3xl">
                            Multi band high resolution image from various satellite.
                        </Text>
                    </Stack>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        maxW="3xl"
                        width="full"
                        spacing={{ base: '4', md: '4' }}
                        {...(!isMobile ? { divider: <StackDivider /> } : {})}
                    >
                        {stats.map((stat, id) => (
                            <Stat key={id} flex="1" {...stat} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}