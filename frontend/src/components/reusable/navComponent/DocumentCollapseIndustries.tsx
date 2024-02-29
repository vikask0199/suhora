import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapseIndustries = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
        <Text as="span">Industries</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {['Forestry', 'Agriculture', 'Disaster & Insurance', 'Renewable Energy', 'Mining', 'Infrastructure', 'Defence & Intelligence'].map((item) => (
            <Button key={item} variant="tertiary" size="lg" justifyContent="start">
              {item}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </>
  )
}