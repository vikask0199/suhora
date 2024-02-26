import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerContent, Stack, useDisclosure } from '@chakra-ui/react'
import { DocumentCollapseServices } from './DocumentCollapseServices'
import { ToggleButton } from './ToggleButton'
import { DocumentCollapseProducts } from './DocumentCollapseProducts'
import { DocumentCollapseResources } from './DocumentCollapseResources'
import { NavLink } from 'react-router-dom'

type mobileDrawerprops = {
  toggleTheme: () => void;
  currentTheme: string
}

export const MobileDrawer = ({ toggleTheme, currentTheme }: mobileDrawerprops) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex', lg: 'none' }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent marginTop={20}>
          <DrawerBody p="4">
            <Stack spacing="1">
              <Button size="lg" variant="tertiary" justifyContent="start">
                Home
              </Button>
              <DocumentCollapseServices />
              <DocumentCollapseProducts />
              <DocumentCollapseResources />
              <NavLink to="/contact-us">
                <Button size="lg" variant="tertiary" justifyContent="start">
                  Contact us
                </Button>
              </NavLink>
              <Button onClick={toggleTheme}>
                {
                  currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />
                }
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}