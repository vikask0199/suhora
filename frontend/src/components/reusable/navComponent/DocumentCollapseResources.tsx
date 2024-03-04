import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapseResources = () => {
    const { isOpen, onToggle } = useDisclosure()
    const routes = [
        { name: "About us", path: "/aboutus" },
        { name: "Blogs", path: "/" },
        { name: "Our Team", path: "/our-team" },
        { name: "Events & News", path: "/" },
        { name: "Careers", path: "/career" },
        { name: "Gallery", path: "/gallery" }
      ]

    return (
        <>
            <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
                <Text as="span" >Resources</Text>
                <PopoverIcon isOpen={isOpen} />
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack spacing="1" alignItems="stretch" ps="4">
                    {routes.map((route) => (
                        <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
                            <Button justifyContent="start" as={Text} variant="" _hover={{ color: "#1266A0" }}>
                                {route.name}
                            </Button>
                        </NavLink>
                    ))}
                </Stack>
            </Collapse>
        </>
    )
} 