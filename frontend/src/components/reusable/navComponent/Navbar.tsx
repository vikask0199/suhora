import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Image,
    useColorModeValue
} from '@chakra-ui/react'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import { DocumentPopoverIndustries } from './DocumentPopoverIndustries'
import { MobileDrawer } from './MobileDrawer'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { DocumentPopoverProduct } from './DocumentPopoverProduct'
import { DocumentPopoverResources } from './DocumentPopoverResources'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DocumentPopoverServices } from './DocumentPopoverServices'
import theme from '../../../theme'

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


    const navbarBgColor = useColorModeValue(scrollBgColor ? "white" : "transparent", scrollBgColor ? "#1A202C" : "transparent");
    console.log(navbarBgColor)


    return (
        <Box h={20} position='fixed' zIndex={1000} top={0} width="100%" bg={navbarBgColor}  boxShadow="2xl">
            <Box as="section">
                <Box position="relative" zIndex="tooltip">
                    <Container h={20} maxW="100%">
                        <HStack justify="space-between" alignItems="center">
                            <Flex h={20} alignItems="center" ml="-4">
                                <Image h="100%" src={currentTheme === 'dark' ? LogoWhite : LogoDark} />
                            </Flex>
                            <HStack spacing="10">
                                <HStack spacing="3">
                                    <MobileDrawer currentTheme={currentTheme} toggleTheme={toggleTheme} />
                                </HStack>
                                <ButtonGroup
                                    size="sm"
                                    variant="text"
                                    display={{ base: 'none', lg: 'flex' }}>
                                    <Button>Home</Button>
                                    <DocumentPopoverProduct />
                                    <DocumentPopoverIndustries />
                                    <DocumentPopoverServices />
                                    <DocumentPopoverResources />
                                    <NavLink to="/contact-us">
                                        <Button>Contact us</Button>
                                    </NavLink>
                                    <Button onClick={toggleTheme}>
                                        {
                                            currentTheme === 'dark' ? <SunIcon color="yellow" fontSize={theme.fonts.subHeadingSecond.size}/> : <MoonIcon />
                                        }
                                    </Button>
                                </ButtonGroup>
                            </HStack>
                        </HStack>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar