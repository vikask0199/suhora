import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapseServices = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
                <Text as="span">Services</Text>
                <PopoverIcon isOpen={isOpen} />
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack spacing="1" alignItems="stretch" ps="4">
                    {['Hydrology', 'Terrain Mapping', 'Land Deformation Monitoring'].map((item) => (
                        <Button key={item} as={Text} _hover={{color: "#1266A0"}} size="lg" justifyContent="start" variant="">
                            {item}
                        </Button>
                    ))}
                </Stack>
            </Collapse>
        </>
    )
}