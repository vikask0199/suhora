import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Flex,
    IconButton,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import { links } from "../../../constant/footerData"
import theme from '../../../theme'
import { FaXTwitter } from 'react-icons/fa6'

type footerThemeProps = {
    currentTheme: string;
}

const Footer = ({ currentTheme }: footerThemeProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box background={backgroundColor} pt={{ base: '16', md: '12' }}>
            <Container as="footer" role="contentinfo" maxW="6xl">
                <Stack
                    justify="space-between"
                    align="start"
                    direction={{ base: 'column', lg: 'row' }}
                    py={{ base: '8', md: '12' }}
                    spacing="8">
                    <Stack spacing={{ base: '2', md: '4' }} align="start" maxW={{ md: '100%', lg: '30%' }}>
                        <Flex h={20} alignItems="center" ml="-4">
                            <Image h="100%" src={currentTheme === 'dark' ? LogoWhite : LogoDark} />
                        </Flex>
                        <Text>
                            313, Tower-B, Noida One, Sector-62, Noida,
                            <br />
                            Uttar Pradesh-201309, India
                            <br />
                            0120-3113029, 3501889
                        </Text>
                    </Stack>
                    <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
                        {links.map((group, idx) => (
                            <Stack key={idx} spacing="1" minW={{ lg: '40' }}>
                                <Text fontSize="lg" ml="4" fontWeight="semibold" color={theme.companyTheme.color.secondry}>
                                    {group.title}
                                </Text>
                                <Stack spacing="" shouldWrapChildren>
                                    {group.links.map((link) => (
                                        <NavLink key={link.href} to={link.href} style={{ textDecoration: 'none' }} >
                                            <Button variant="tertiary" justifyContent="start" fontSize="sm" fontWeight="normal" _hover={{ color: theme.companyTheme.color.secondry }}>
                                                {link.label}
                                            </Button>
                                        </NavLink>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Stack>
                <Divider />
                <Stack
                    pt="2"
                    pb="2"
                    justify="space-between"
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align="center">
                    <Text fontSize="sm" color="fg.subtle">
                        &copy; {new Date().getFullYear()} Suhora | Space Analytics Simplified, All rights reserved.
                    </Text>
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} _hover={{ color: theme.companyTheme.color.secondry }} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaWhatsapp />} _hover={{ color: theme.companyTheme.color.secondry }} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaXTwitter />} _hover={{ color: theme.companyTheme.color.secondry }} />
                    </ButtonGroup>
                </Stack>
            </Container>
        </Box>
    )
}
export default Footer