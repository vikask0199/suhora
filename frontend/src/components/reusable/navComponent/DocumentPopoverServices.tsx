import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { PopoverIcon } from './PopoverIcon'
import { NavLink } from 'react-router-dom';

export const DocumentPopoverServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const routes = [
    { name: 'Hydrology', path: '/hydrology' },
    { name: 'Terrain Mapping', path: '/terrain-mapping' },
    { name: 'Land Deformation Monitoring', path: '/land-deformation-monitoring' }
  ];

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} trigger="hover" openDelay={0}>
      <PopoverTrigger>
        <Button rightIcon={<PopoverIcon isOpen={isOpen} />}>Services</Button>
      </PopoverTrigger>
      <PopoverContent p="2" maxW="fit-content" mr="-180" mt="3">
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