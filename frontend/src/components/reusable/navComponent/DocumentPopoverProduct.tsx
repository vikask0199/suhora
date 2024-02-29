import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'
import { NavLink } from 'react-router-dom'

export const DocumentPopoverProduct = () => {

  const routes = [
    { name: "Spade", path: "/spadepage" },
    { name: "Lance", path: "/lancepage" },
    { name: "SID", path: "/sidpage" }
  ]


  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>Products</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-220" mt="3">
        <Stack spacing="0" alignItems="stretch">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button variant="tertiary" justifyContent="start">
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}