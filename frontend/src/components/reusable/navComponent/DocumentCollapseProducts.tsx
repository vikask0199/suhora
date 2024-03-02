import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { PopoverIcon } from './PopoverIcon'

export const DocumentCollapseProducts = () => {
  const { isOpen, onToggle } = useDisclosure()

  const routes = [
    { name: "Spade", path: "/spade" },
    { name: "Lance", path: "/lance" },
    { name: "SID", path: "/sid" }
  ]


  return (
    <>
      <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
        <Text as="span">Products</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button justifyContent="start" variant="" as={Text} _hover={{ color: "#1266A0" }}>
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </Collapse>
    </>
  )
} 