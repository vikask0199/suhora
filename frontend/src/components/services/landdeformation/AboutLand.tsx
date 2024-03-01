
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

export const AboutLand = ({ currentTheme }: aboutSuhoraProps) => {
  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box background={backgroundColor}>
      <Container py={{ base: '16', md: '12' }} maxW="6xl">
        <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
          <Stack spacing={{ base: '4', md: '5' }}>
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <Text>
                <Text as="span">Land </Text>
                <Text as="span" color={theme.companyTheme.color.secondry}>Deformation Mapping </Text>
              </Text>
            </Flex>
            <Text color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
            Mapping Earth's shifts, informing decisions with millimeter precision.
            </Text>
            <Text textAlign="justify">
              Advances in space based imaging have greatly enhanced our ability to monitor and understand
              land surface deformation. Imagine a constellation of orbiting eyes, peering down at our planet
              with radar vision. These eyes capture subtle ground movements caused by tectonic forces,
              human activities, and natural processes. When earthquakes rumble beneath the Earth's crust,
              SAR satellites detect the resulting shifts in terrain. They create mesmerizing
              interferograms—maps that reveal relative ground-surface changes. Whether it's a sinking city, a
              rising volcano, or a subsiding oil field, SAR provides a dynamic snapshot of our ever-evolving
              Earth. Land deformation mapping isn't just science; it's a captivating story told by radar waves.
              <br />
              <br />
              This ability provides immense value to many public and private organizations since the changes
              that are detected are in millimeters. This can effectively provide early warning of stresses on
              critical infrastructure such as bridges, dams, roads and railway lines.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}