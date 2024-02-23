import { Container, Flex, Stack, Text } from '@chakra-ui/react'
import { stats } from '../../../constant/whatsWeDoData'
import theme from '../../../theme'
import { Stat } from './Stat'

export const WhatWeDo = () => (
    <Container py={{ base: '16', md: '12' }} maxW="5xl">
        <Stack spacing={{ base: '12', md: '14' }} alignItems="stretch">
            <Stack spacing={{ base: '4', md: '5' }} direction="column">
                <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                    <Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Our </Text>
                        <Text as="span">Products</Text>
                    </Text>
                </Flex>
                <Text fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                    Everything you need to build modern UI and great products.
                </Text>
            </Stack>
            <Stack spacing="8" direction={{ base: 'column', md: 'row' }}>
                {stats.map((stat) => (
                    <Stat key={stat.label} {...stat} />
                ))}
            </Stack>
        </Stack>
    </Container>
)