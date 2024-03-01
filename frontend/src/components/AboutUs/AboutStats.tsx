import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import theme from '../../theme'

interface StatProps {
  label: string
  description: string
  value: string
  cta: string
}

export const Stat = (props: StatProps) => {

  const { label, description, cta } = props

  return (
    <Stack spacing="3" flex="1" >
      <Flex direction="column" justifyContent="space-between" minH={140}>
        <Stack>
          <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
            {label}
          </Text>
          <Text>{description}</Text>
        </Stack>
        <Button
          fontWeight={theme.fonts.subHeadingThird.weight}
          variant="link"
          colorScheme="blue"
         
        >
          
        </Button>
      </Flex>
    </Stack>
  )
}