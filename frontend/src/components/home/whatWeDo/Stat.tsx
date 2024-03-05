import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'
import theme from '../../../theme'
import { Link } from 'react-router-dom'

interface StatProps {
  label: string
  description: string
  value: string
  cta: string
  link : string
}

export const Stat = (props: StatProps) => {

  const { label, description, cta, link } = props

  return (
    <Stack spacing="3" flex="1" >
      <Flex direction="column" justifyContent="space-between" minH={140}>
        <Stack>
          <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
            {label}
          </Text>
          <Text>{description}</Text>
        </Stack>
        <Link to={link}>
        <Button
          fontWeight={theme.fonts.subHeadingThird.weight}
          variant="link"
          
          colorScheme="blue"
          rightIcon={<FiArrowRight />}
        >
          {cta}
        </Button>
        </Link>
      </Flex>
    </Stack>
  )
}