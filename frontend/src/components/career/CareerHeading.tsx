import {
  Box,
  Container,
  Flex,
  
  SimpleGrid,
  Stack,
  Text,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';

import { GiImpactPoint } from "react-icons/gi";
import { SiInteractjs, SiSololearn } from "react-icons/si";
import theme from '../../theme';
import { motion } from 'framer-motion';
import { textVarient, textVarientSecond } from '../../animation';

const AnimateText = motion(Text)
const AnimatedBox = motion(Box)


interface IFeature {
  heading: string;
  content: string;
}

const features: IFeature[] = [
  {
    heading: 'Learn',
    content: 'Expand your skills and knowledge with us. We offer ongoing learning opportunities to help you grow professionally.',

  },
  {
    heading: 'Collaborate',
    content: 'Work together in a supportive environment where your ideas matter. Join forces with talented individuals to create innovative solutions..',
  },
  {
    heading: 'Make an impact',
    content: 'Be part of something meaningful. Make a difference by contributing to projects that matter. ',
  }
];

type cardHeadingCurrentTheme = {
  currentTheme: string;
}

const CareerHeading = ({ currentTheme }: cardHeadingCurrentTheme) => {
  const iconArray = [<SiSololearn />, <SiInteractjs />, <GiImpactPoint />]
  const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

  return (
    <Box width="100%" py={{ base: '4', md: '8', lg: '16' }} background={backgroundColor}>
      <Container maxW="6xl" >
        <Stack spacing={{ base: '2', md: '3' }} pb={{ base: '4', md: '8', lg: '12' }} direction="column">
          <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
            <AnimateText variants={textVarient} whileInView="show" initial="hidden">
              <Text as="span" color={theme.companyTheme.color.secondry}>Join </Text>
              <Text as="span">Us</Text>
            </AnimateText>
          </Flex>
          <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden" fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
            Building tomorrow's success, together - join our vibrant team now!
          </AnimateText>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4} mt={12}>
          {features.map((feature, index) => (
            <AnimatedBox variants={textVarient} whileInView="show" initial="hidden"
              mb={4}
              key={index}
              bg={useColorModeValue('gray.100', 'gray.700')}
              p={6}
              rounded="lg"
              textAlign="center"
              pos="relative">
              <Flex
                p={2}
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #228be6, #15aabf)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-2.3rem"
                boxShadow="lg" fontSize={theme.aboutIcon.size} fontWeight={theme.aboutIcon.weight} >
                {iconArray[index]}
              </Flex>
              <chakra.h3 fontWeight={theme.fonts.subHeading.weight} fontSize={theme.fonts.subHeading.size} mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text my={4}>
                {feature.content}
              </Text>
              {/* <Link href="#" fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                Learn more →
              </Link> */}
            </AnimatedBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CareerHeading;