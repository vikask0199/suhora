import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerContent, Stack, useDisclosure } from '@chakra-ui/react'
import { DocumentCollapse } from './DocumentCollapse'
import { ToggleButton } from './ToggleButton'

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
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Button size="lg" variant="tertiary" justifyContent="start">
                Dashboard
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
                Analysis
              </Button>
              <DocumentCollapse />
              <Button size="lg" variant="tertiary" justifyContent="start">
                History
              </Button>
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