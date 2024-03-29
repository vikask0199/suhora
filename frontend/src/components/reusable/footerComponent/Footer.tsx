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
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import { links } from "../../../constant/footerData"
import theme from '../../../theme'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
import { textVarient } from '../../../animation'


type footerThemeProps = {
    currentTheme: string;
}
const Footer = ({ currentTheme }: footerThemeProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282B3C';

    const AnimatedBox = motion(Stack)

    return (
        <Box background={backgroundColor} pt={{ base: '16', md: '12' }} >
            <Container as="footer" role="contentinfo" maxW="6xl">
                <AnimatedBox
                    variants={textVarient} whileInView="show" initial="hidden"
                    justify="space-between"
                    align="start"
                    direction={{ base: 'column', lg: 'row' }}
                    py={{ base: '8', md: '12' }}
                    spacing="8">
                    <Stack spacing={{ base: '2', md: '' }} align="start" maxW={{ md: '100%', lg: '30%' }}>
                        <Flex h={20} alignItems="center" ml="-5">
                            <Image h="100%" src={currentTheme === 'dark' ? LogoWhite : LogoDark} />
                        </Flex>
                        <Flex direction="column" gap="3">
                            <Flex gap="3">
                                <Text fontSize={theme.fonts.subHeading.size} p="1">
                                    <FaLocationDot />
                                </Text>
                                <Flex >
                                    313, Tower-B, Noida One,
                                    <br />
                                    Sector-62,
                                    Noida,
                                    U.P.-201309, India
                                    <br />
                                </Flex>
                            </Flex>
                            <Flex gap="3">
                                <Text fontSize={theme.fonts.subHeading.size} p="1">
                                    <FaPhoneAlt />
                                </Text>
                                <Flex >
                                    0120-3113029, 3501889
                                    <br />
                                    +91-9999664473
                                </Flex>
                            </Flex>
                        </Flex>
                    </Stack>
                    <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
                        {links.map((group, idx) => (
                            <Stack key={idx} spacing="1" minW={{ lg: '40' }}>
                                <Text fontSize="lg" ml="4" fontWeight="semibold" color={theme.companyTheme.color.secondry}>
                                    {group.title}
                                </Text>
                                <Stack spacing="" shouldWrapChildren>
                                    {group.links.map((link, index) => (
                                        <NavLink key={index} to={link.href} style={{ textDecoration: 'none' }} >
                                            <Button variant="tertiary" justifyContent="start" fontSize="sm" fontWeight="normal" _hover={{ color: theme.companyTheme.color.secondry }}>
                                                {link.label}
                                            </Button>
                                        </NavLink>
                                    ))}
                                </Stack>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </AnimatedBox>
                <Divider />
                <AnimatedBox
                    variants={textVarient} whileInView="show" initial="hidden"
                    pt="2"
                    pb="2"
                    justify="space-between"
                    direction={{ base: 'column-reverse', md: 'row' }}
                    align="center">
                    <Text fontSize="sm" color="fg.subtle">
                        &copy; {new Date().getFullYear()} Suhora | Space Analytics Simplified, All rights reserved. | <Link to="/privacy-policy">Privacy Policy </Link>
                    </Text>
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="https://www.linkedin.com/company/suhora/mycompany/" target="_blank" aria-label="LinkedIn" icon={<FaLinkedin />} _hover={{ color: theme.companyTheme.color.secondry }} />
                        <IconButton as="a" href="https://wa.me/+919999664437" target="_blank" aria-label="GitHub" icon={<FaWhatsapp />} _hover={{ color: theme.companyTheme.color.secondry }} />
                        <IconButton as="a" href="https://twitter.com/suhoratech" target="_blank" aria-label="Twitter" icon={<FaXTwitter />} _hover={{ color: theme.companyTheme.color.secondry }} />
                    </ButtonGroup>
                </AnimatedBox>
            </Container>
        </Box>
    )
}
export default Footer