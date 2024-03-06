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
    { name: "About us", path: "/aboutus", openInNewTab: false  },
    { name: "Imaging Capabilities", path: "/gallery", openInNewTab: false },
    { name: "Our Team", path: "/our-team",  openInNewTab: false},
    { name: "Events & News", path: "https://blogs.suhora.com",openInNewTab: true },
    { name: "Blogs", path: "https://blogs.suhora.com",openInNewTab: true },
    { name: "Careers", path: "/career",  openInNewTab: false },
    
  ]

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />} as={Text} _hover={{ color: "#1266A0" }}>Company</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-180" mt="3">
        <Stack spacing="0" alignItems="stretch">
          {routes.map((route, index) => (
            <NavLink key={index} to={route.path} style={{ textDecoration: 'none' }} target={route.openInNewTab ? "_blank" : "_self"}>
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