import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapseResources = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
                <Text as="span" >Resources</Text>
                <PopoverIcon isOpen={isOpen} />
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack spacing="1" alignItems="stretch" ps="4">
                    {['About us', 'Blogs', 'Events & News', 'Careers'].map((item) => (
                        <Button key={item} _hover={{color: "#1266A0"}} as={Text} size="lg" justifyContent="start" variant="">
                            {item}
                        </Button>
                    ))}
                </Stack>
            </Collapse>
        </>
    )
}