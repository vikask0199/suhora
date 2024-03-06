import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { PopoverIcon } from './PopoverIcon';
type documentCollapseProps = {
    closeFunction: () => void
}

export const DocumentCollapseServices = ({ closeFunction }: documentCollapseProps) => {
    const { isOpen, onToggle } = useDisclosure()
    const routes = [
        { name: 'Hydrology', path: '/product-hydrology' },
        { name: 'Terrain Mapping', path: '/product-terrainmapping' },
        { name: 'Land Deformation Monitoring', path: '/land-deformation-monitoring' }
    ];

    return (
        <>
            <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
                <Text as="span">Services</Text>
                <PopoverIcon isOpen={isOpen} />
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack spacing="1" alignItems="stretch" ps="4">
                    {routes.map((route) => (
                        <NavLink key={route.path} to={route.path}  onClick={closeFunction} style={{ textDecoration: 'none' }}>
                            <Button as={Text} variant="" justifyContent="start" _hover={{ color: "#1266A0" }}>
                                {route.name}
                            </Button>
                        </NavLink>
                    ))}
                </Stack>
            </Collapse>
        </>
    )
} 