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
import { NavLink } from 'react-router-dom';

export const DocumentPopoverServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const routes = [
    { name: 'Hydrology', path: '/product-hydrology' },
    { name: 'Terrain Mapping', path: '/product-terrainmapping' },
    { name: 'Land Deformation Monitoring', path: '/land-deformation-monitoring' }
  ];

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />} as={Text} _hover={{color: "#1266A0"}}>Services</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-180" mt="3">
        <Stack spacing="0" alignItems="stretch">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button as={Text} justifyContent="start" _hover={{color: "#1266A0"}}>
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  )
}