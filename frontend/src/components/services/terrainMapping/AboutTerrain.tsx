
import {
  Box,
  Container,
  Flex,
  Stack,
  Text
} from '@chakra-ui/react';

import theme from "../../../theme";
import { motion } from 'framer-motion';
import { textVarient, textVarientDelayMedium, textVarientSecond } from '../../../animation';

const AnimateText = motion(Text)

interface aboutSuhoraProps {
  currentTheme: string
}

export const AboutTerrain = ({ currentTheme }: aboutSuhoraProps) => {
  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box background={backgroundColor}>
      <Container py={{ base: '16', md: '12' }} maxW="6xl">
        <Stack spacing={{ base: '12', md: '12' }} textAlign="center" align="center">
          <Stack spacing={{ base: '4', md: '5' }}>
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                <Text as="span">Terrain </Text>
                <Text as="span" color={theme.companyTheme.color.secondry}> Mapping</Text>
              </AnimateText>
            </Flex>
            <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
              Elevating decisions with precision in 3D terrain solutions.
            </AnimateText>
            <AnimateText variants={textVarientDelayMedium} whileInView="show" initial="hidden" textAlign="justify">
              Suhora's 3D layers provide a robust framework for governments and businesses, empowering
              them to make informed decisions and discover intelligent solutions for their planning challenges.
              Our elevation data is produced through highly precise processes to create globally available
              digital elevation models. We innovative processing strategies
              <br />
              <br />
              Suhora has been able to achieve consistently high accuracies in remote terrain without any
              ground control points.
            </AnimateText>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}