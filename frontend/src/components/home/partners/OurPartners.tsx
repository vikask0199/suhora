import { Box, Center, Container, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import * as logos from './PartnersLogo'
import theme from '../../../theme'

export const OurPartners = () => (
    <Box width="100%">
        <Container py={{ base: '4', md: '8', lg: '12' }} maxW="5xl">
            <Stack spacing="8">
                <Stack spacing={{ base: '4', md: '5' }} direction="column">
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                        <Text>
                            <Text as="span" color={theme.companyTheme.color.secondry}>Our </Text>
                            <Text as="span">Partners</Text>
                        </Text>
                    </Flex>
                    <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                        Everything you need to build modern UI and great products.
                    </Text>
                </Stack>
                <SimpleGrid gap={{ base: '4', md: '6' }} columns={{ base: 2, md: 3 }}>
                    {Object.entries(logos).map(([name, Logo]) => (
                        <Center
                            key={name}
                            py={{ base: '4', md: '8' }}
                            borderRadius="lg"
                            boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                            <Logo h={{ base: '8', md: '10' }} maxW="180px" />
                        </Center>
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    </Box>
)