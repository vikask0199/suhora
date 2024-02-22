import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Image
} from '@chakra-ui/react'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import { DocumentPopover } from './DocumentPopover'
import { MobileDrawer } from './MobileDrawer'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type navBarProps = {
    toggleTheme: () => void;
    currentTheme: string;
}

const Navbar = ({ currentTheme, toggleTheme }: navBarProps) => (
    <Box as="section" >
        <Box borderBottomWidth="1px" position="relative" zIndex="tooltip">
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
                            size="md"
                            variant="text"
                            display={{ base: 'none', lg: 'flex' }}>
                            <Button>Dashbaord</Button>
                            <Button>Analysis</Button>
                            <DocumentPopover />
                            <Button>History</Button>
                            <Button onClick={toggleTheme}>
                                {
                                    currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />
                                }
                            </Button>
                        </ButtonGroup>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    </Box>
)

export default Navbar