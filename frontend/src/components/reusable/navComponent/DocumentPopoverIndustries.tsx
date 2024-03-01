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

export const DocumentPopoverIndustries = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const routes = [
    { name: "Forestry", path: "/" },
    { name: "Agriculture", path: "/agriculture" },
    { name: "Disaster & Insurance", path: "/" },
    { name: "Renewable Energy", path: "/" },
    { name: "Mining", path: "/" },
    { name: "Infrastructure", path: "/" },
    { name: "Defence & Intelligence'", path: "/" }
  ]
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />} as={Text} _hover={{color: "#1266A0"}}>Industries</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-150" mt="3">
        <Stack spacing="0" alignItems="stretch">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button justifyContent="start" as={Text} _hover={{color: "#1266A0"}}>
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}