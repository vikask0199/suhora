import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import theme from '../../../theme'

interface StatProps {
  label: string
  description: string
  value: string
  cta: string
}

export const Stat = (props: StatProps) => {
  const { label, description, value, cta } = props
  return (
    <Stack spacing="3" flex="1">
      <Flex direction="column" justifyContent="space-between" >
        <Stack>
          <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
            {label}
          </Text>
          <Text>{description}</Text>
        </Stack>
        <Button
          alignSelf="start"
          size="lg"
          variant="link"
          colorScheme="blue"
          rightIcon={<FiArrowRight />}
        >
          {cta}
        </Button>
      </Flex>
    </Stack>
  )
}