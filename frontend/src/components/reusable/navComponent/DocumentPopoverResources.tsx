import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    useDisclosure,
  } from '@chakra-ui/react'
  import { PopoverIcon } from './PopoverIcon'
  
  export const DocumentPopoverResources = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
        <PopoverTrigger>
          <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>Resources</Button>
        </PopoverTrigger>
        <PopoverContent p="2" maxW="fit-content"  mr="-180" mt="3">
          <Stack spacing="0" alignItems="stretch">
            {['About us','Blogs', 'Events & News', 'Careers'].map((item) => (
              <Button key={item} variant="tertiary" justifyContent="start">
                {item}
              </Button>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    )
  }