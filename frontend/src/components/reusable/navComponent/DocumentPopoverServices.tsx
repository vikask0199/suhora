import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useDisclosure,
  } from '@chakra-ui/react'
  import { PopoverIcon } from './PopoverIcon'
  
  export const DocumentPopoverServices = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
        <PopoverTrigger>
          <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>Services</Button>
        </PopoverTrigger>
        <PopoverContent p="2" maxW="fit-content"  mr="-150" mt="3">
          <Stack spacing="0" alignItems="stretch">
            {['Forestry', 'Agriculture', 'Disaster & Insurance', 'Renewable Energy', 'Mining', 'Infrastructure', 'Defense & Intelligence'].map((item) => (
              <Button key={item} variant="tertiary" justifyContent="start">
                {item}
              </Button>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    )
  }