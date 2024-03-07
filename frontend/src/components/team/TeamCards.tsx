import {

  Container,
  Flex,
  HStack,

  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  AspectRatio,

} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import theme from '../../theme'
import Rupesh from '../../assets/img/rupesh.jpg'
import krishnanu from '../../assets/img/Krishanu.jpg'
import Amit from '../../assets/img/Amit.jpg'
import tanmoy from '../../assets/img/Tanmoy.webp'
import surojit from '../../assets/img/Surojit-Bose.jpg'
import Navneet from '../../assets/img/NavneetKaushik.jpg'
import { motion } from 'framer-motion'
import { textVarient, textVarientDelayMedium, textVarientSecond } from '../../animation'

const AnimatedText  = motion(Text)
const AnimatedStack = motion(Stack)

const TeamCards = () => {
  const arrayHeading = ["", "Board Of Directors", "Advisors"]
  const arraIcon = [<FaLinkedin />]



  return (
    <Container maxW="6xl" py={{ base: '16', md: '12' }} >
      <Stack>
        <Stack>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
              <AnimatedText variants={textVarientDelayMedium} whileInView="show" initial="hidden">
                <Text as="span" color={theme.companyTheme.color.secondry} >Leadership </Text>
                <Text as="span">Team </Text>
              </AnimatedText>
            </Flex>
            {/* <Text textAlign="center" maxW="6xl" color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight}>
              Multi-band high-resolution images from various satellites.
            </Text> */}
          </Stack>
        </Stack>

        <Stack >
          {/* <Stack
            spacing={{ base: '8', md: '10' }}
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between">
            <Heading size={{ base: 'sm', md: 'md' }}>Meet our team</Heading>
          </Stack> */}
          <Flex flexDirection="column" gap="16">
            {members.map((member, index) => (
              <Flex key={index} flexDirection="column" gap="10">
                <Stack
                  spacing={{ base: '8', md: '10' }}
                  direction={{ base: 'column', lg: 'row' }}
                  justifyContent="center">
                  <AnimatedText variants={textVarient} whileInView="show" initial="hidden" fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.secondry}>{arrayHeading[index]}</AnimatedText>
                </Stack>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  columnGap="8"
                  rowGap={{ base: '10', lg: '16' }}>
                  {
                    member.map((item, index) => (
                      <AnimatedStack variants={textVarientSecond} whileInView="show" initial="hidden" key={index} spacing="4">
                        <Stack spacing="5">
                          <AspectRatio ratio={3 / 3}>
                            <Img src={item.image} alt={item.name} objectFit="cover" />
                          </AspectRatio>
                          <Stack spacing="1">
                            <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                              {item.name}
                            </Text>
                            <Text fontSize={{ base: 'md', md: 'lg' }}>
                              {item.role}
                            </Text>
                          </Stack>
                        </Stack>
                        <HStack spacing="4">
                          <Link href={item.item} target='_blank' fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.secondry}>
                            {arraIcon[0]}
                          </Link>
                        </HStack>
                      </AnimatedStack>
                    ))
                  }
                </SimpleGrid>
              </Flex>
            ))}
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TeamCards;

const members = [
  [
    {
      role: 'CEO and Co-Founder',
      image: krishnanu,
      item: 'https://www.linkedin.com/in/krishanuacharya/',
      name: 'Krishanu Acharya',
      heading: '',
    },
    {
      role: 'CTO and Co-Founder',
      image: Rupesh,
      item: 'https://www.linkedin.com/in/rupeshgupte/',
      name: 'Rupesh Kumar',
      heading: '',
    },
    {
      role: 'COO and Co-Founder',
      image: Amit,
      item: 'https://www.linkedin.com/in/amitkumarsaini/',
      name: 'Amit Kumar',
      heading: '',
    },

  ],
  [
    {
      role: 'CEO and Co-Founder',
      image: krishnanu,
      item: 'https://www.linkedin.com/in/krishanuacharya/',
      name: 'Krishanu Acharya',
      heading: 'Board of Directors',
    },
    {
      role: 'CTO and Co-Founder',
      image: Rupesh,
      item: 'https://www.linkedin.com/in/rupeshgupte/',
      name: 'Rupesh Kumar',
      heading: 'Board of Directors',
    },
    {
      role: 'COO and Co-Founder',
      image: Amit,
      item: 'https://www.linkedin.com/in/amitkumarsaini/',
      name: 'Amit Kumar',
      heading: 'Board of Directors',
    },
    {
      role: 'Director - Strategy',
      image: tanmoy,
      name: 'Tanmoy Adhikary',
      item: 'https://www.linkedin.com/in/tanmoy-adhikary-8132002/',
      heading: 'Board of Director',
    },
  ],
  [
    {
      role: 'Advisor',
      image: surojit,
      name: 'Surojit Bose',
      item: 'https://www.linkedin.com/in/surojitbose/',
      heading: 'Advisors',
    },
    {
      role: 'Advisor',
      image: Navneet,
      heading: 'Advisors',
      name: 'Navneet Kaushik',
      item: 'https://www.linkedin.com/in/cdr-navneet-kaushik-veteran-98964b82/',
    },
    {
      role: 'Director - Strategy',
      image: tanmoy,
      name: 'Tanmoy Adhikary',
      item: 'https://www.linkedin.com/in/tanmoy-adhikary-8132002/',
      heading: 'Advisors',
    },

  ],
];
