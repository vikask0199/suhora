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
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import LogoDark from '../../../assets/img/logo/suhora_logo.png'
import LogoWhite from '../../../assets/img/logo/suhora_white.png'
import { links } from "../../../constant/footerData"

type footerThemeProps = {
    currentTheme: string;
}

const Footer = ({ currentTheme }: footerThemeProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return(
        <Box background={backgroundColor}>
            <Container as="footer" role="contentinfo" maxW="100%">
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
                        <Text color="fg.muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum sunt natus odio doloremque reiciendis saepe consequuntur tempore explicabo aspernatur.</Text>
                    </Stack>
                    <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
                        {links.map((group, idx) => (
                            <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
                                <Text fontSize="lg" ml="4" fontWeight="semibold" color="fg.subtle">
                                    {group.title}
                                </Text>
                                <Stack spacing="" shouldWrapChildren>
                                    {group.links.map((link, idx) => (
                                        <Button key={idx} as="a" fontSize="md" variant="text" href={link.href}>
                                            {link.label}
                                        </Button>
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
                        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                    </Text>
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                    </ButtonGroup>
                </Stack>
            </Container>
        </Box>
    )
}
export default Footer