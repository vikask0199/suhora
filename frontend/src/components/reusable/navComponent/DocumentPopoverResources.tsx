import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useDisclosure,
  } from '@chakra-ui/react'
  import { PopoverIcon } from './PopoverIcon'
  
  export const DocumentPopoverResources = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
        <PopoverTrigger>
          <Button rightIcon={<PopoverIcon isOpen={isOpen} />} as={Text} _hover={{color: "#1266A0"}}>Company</Button>
        </PopoverTrigger>
        <PopoverContent p="2" maxW="fit-content"  mr="-180" mt="3">
          <Stack spacing="0" alignItems="stretch">
            {['About us','Blogs', 'Events & News', 'Careers'].map((item) => (
              <Button key={item} as={Text} justifyContent="start" _hover={{color: "#1266A0"}}>
                {item}
              </Button>
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    )
  }