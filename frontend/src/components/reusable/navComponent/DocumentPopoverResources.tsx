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
import { NavLink } from 'react-router-dom'

export const DocumentPopoverResources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const routes = [
    { name: "About us", path: "/aboutus" },
    { name: "Blogs", path: "/" },
    { name: "Our Team", path: "/our-team" },
    { name: "Events & News", path: "/" },
    { name: "Careers", path: "/career" },
    { name: "Gallery", path: "/gallery" },
  ]

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />} as={Text} _hover={{ color: "#1266A0" }}>Company</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-180" mt="3">
        <Stack spacing="0" alignItems="stretch">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button justifyContent="start" as={Text} _hover={{ color: "#1266A0" }}>
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}