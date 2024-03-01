import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Image,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import theme from '../../../theme'
import { DocumentPopoverIndustries } from './DocumentPopoverIndustries'
import { DocumentPopoverProduct } from './DocumentPopoverProduct'
import { DocumentPopoverResources } from './DocumentPopoverResources'
import { DocumentPopoverServices } from './DocumentPopoverServices'
import { MobileDrawer } from './MobileDrawer'

type navBarProps = {
    toggleTheme: () => void;
    currentTheme: string;
}

const Navbar = ({ currentTheme, toggleTheme }: navBarProps) => {
    const [scrollBgColor, setScrollBgColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollBgColor(true);
            } else {
                setScrollBgColor(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const navbarBgColor = useColorModeValue(scrollBgColor ? "white" : "white", scrollBgColor ? "#1A202C" : "transparent");


    return (
        <Box h={20} position='fixed' zIndex={1000} top={0} width="100%" bg={navbarBgColor} boxShadow={scrollBgColor ? "2xl" : ''} >
            <Box as="section">
                <Box position="relative" zIndex="tooltip">
                    <Container h={20} maxW="100%">
                        <HStack justify="space-between" alignItems="center">
                            <NavLink to="/">
                                <Flex h={20} alignItems="center" ml="-4">
                                    <Image h="100%" src={currentTheme === 'dark' ? LogoWhite : LogoDark} />
                                </Flex>
                            </NavLink>
                            <HStack spacing="10">
                                <HStack spacing="3">
                                    <MobileDrawer currentTheme={currentTheme} toggleTheme={toggleTheme} />
                                </HStack>
                                <ButtonGroup
                                    variant="text"
                                    display={{ base: 'none', lg: 'flex' }}>
                                    <NavLink to="/" >
                                        <Button as={Text} _hover={{ color: "#1266A0" }}>
                                            Home
                                        </Button>
                                    </NavLink>
                                    <DocumentPopoverProduct />
                                    <DocumentPopoverIndustries />
                                    <DocumentPopoverServices />
                                    <DocumentPopoverResources />
                                    <NavLink to="/contact-us">
                                        <Button as={Text} _hover={{ color: "#1266A0" }}>Contact us</Button>
                                    </NavLink>
                                    <Button onClick={toggleTheme}>
                                        {
                                            currentTheme === 'dark' ? <SunIcon color="yellow" fontSize={theme.fonts.subHeadingSecond.size} /> : <MoonIcon />
                                        }
                                    </Button>
                                </ButtonGroup>
                            </HStack>
                        </HStack>
                    </Container>
                </Box>
            </Box>
        </Box >
    )
}

export default Navbar