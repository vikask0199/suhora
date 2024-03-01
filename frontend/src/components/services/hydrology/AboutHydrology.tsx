
import {
  Box,
  Container,
  Flex,
  Stack,
  Text
} from '@chakra-ui/react';

import theme from "../../../theme";


interface aboutSuhoraProps {
  currentTheme: string
}

export const AboutHydrology = ({ currentTheme }: aboutSuhoraProps) => {
  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box background={backgroundColor}>
      <Container py={{ base: '16', md: '12' }} maxW="6xl">
        <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
          <Stack spacing={{ base: '4', md: '5' }}>
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <Text>
                <Text as="span">Hydrological </Text>
                <Text as="span" color={theme.companyTheme.color.secondry}> Studies</Text>
              </Text>
            </Flex>
            <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
              Mitigating flood risks for critical infrastructure worldwide.
            </Text>
            <Text textAlign="justify">
              Losses associated with floods are immense, especially in cases where assets on ground are critical infrastructure. When such assets cover large areas such as gigawatt scale solar PV or wind energy the vulnerability to losses becomes more pronounced. It's essential to prepare for these risks in advance at the time of planning and implementation of such projects.
              <br />
              <br />
              Suhora has worked with customers globally to understand and study the flood risks in a multitude of geographies. With a team of expert hydrology experts we model the risk at a site and suggest mitigation measures.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}