import { Stack, StackProps, Text } from '@chakra-ui/react'

interface StatProps extends StackProps {
  label: string
  value: string
}

export const AboutLanceStat = (props: StatProps) => {
  const { label, value, ...stackProps } = props
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Text fontSize="lg" fontWeight="medium">
        {label}
      </Text>
    </Stack>
  )
}