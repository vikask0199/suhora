import { Button, Collapse, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { PopoverIcon } from './PopoverIcon'


export const DocumentCollapseIndustries = () => {
  const { isOpen, onToggle } = useDisclosure()
  const routes = [
    { name: "Forestry", path: "/forestry" },
    { name: "Agriculture", path: "/agriculture" },
    { name: "Disaster & Insurance", path: "/disaster-and-insurence" },
    { name: "Renewable Energy", path: "/renewable-energy" },
    { name: "Mining", path: "/mining" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Defence & Intelligence'", path: "/defence-and-intelligence" }
  ]


  return (
    <>
      <Button justifyContent="space-between" variant="tertiary" size="lg" onClick={onToggle}>
        <Text as="span">Industries</Text>
        <PopoverIcon isOpen={isOpen} />
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack spacing="1" alignItems="stretch" ps="4">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} style={{ textDecoration: 'none' }}>
              <Button justifyContent="start" variant="" as={Text} _hover={{ color: "#1266A0" }} >
                {route.name}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </Collapse>
    </>
  )
}