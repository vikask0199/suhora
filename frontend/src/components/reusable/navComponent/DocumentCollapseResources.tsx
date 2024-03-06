import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { PopoverIcon } from './PopoverIcon'

type documentCollapseProps = {
    closeFunction: () => void
}

export const DocumentCollapseResources = ({ closeFunction }: documentCollapseProps) => {
    const { isOpen, onToggle } = useDisclosure()
    const routes = [
        { name: "About us", path: "/aboutus", openInNewTab: false  },
        { name: "Imaging Capabilities", path: "/gallery", openInNewTab: false },
        { name: "Our Team", path: "/our-team",  openInNewTab: false},
        { name: "Events & News", path: "https://blogs.suhora.com",openInNewTab: true },
        { name: "Blogs", path: "https://blogs.suhora.com",openInNewTab: true },
        { name: "Careers", path: "/career",  openInNewTab: false },
        
      ]

    return (
        <>
            <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
                <Text as="span" >Company</Text>
                <PopoverIcon isOpen={isOpen} />
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack spacing="1" alignItems="stretch" ps="4">
                    {routes.map((route, index) => (
                        <NavLink key={index} to={route.path} onClick={closeFunction} style={{ textDecoration: 'none' }} target={route.openInNewTab ? "_blank" : "_self"}>
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