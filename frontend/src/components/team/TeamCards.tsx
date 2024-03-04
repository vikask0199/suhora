import {
   
  Container,
 Flex,
  HStack,
  Icon,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  AspectRatio
} from '@chakra-ui/react'
import {  FaLinkedin } from 'react-icons/fa'
import theme from '../../theme'
import Rupesh from '../../assets/img/rupesh (1).jpg'
import krishnanu from '../../assets/img/Krishanu_old-BzskEh_a (1).jpg'
import Amit from '../../assets/img/Amit.jpg'
import tanmoy from '../../assets/img/tanmoy (1).jpg'
import surojit from '../../assets/img/Surojit-Bose (3).jpg'
import Navneet from '../../assets/img/NavneetKaushik.jpg'

const TeamCards = () => {
  return (
    <Container maxW="6xl" p={2}>
      <Stack spacing={{ base: '12', md: '16' }} >
        <Stack>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} pt={10}>
              <Text>
                <Text as="span" color={theme.companyTheme.color.secondry} >Leadership </Text>
                <Text as="span">Team </Text>
              </Text>
            </Flex>
            {/* <Text textAlign="center" maxW="6xl" color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight}>
              Multi-band high-resolution images from various satellites.
            </Text> */}
          </Stack>
        </Stack>
        <SimpleGrid
          columns={1} // Set to 1 column for a row form
          rowGap={{ base: '20', lg: '20' }} 
        >
          {members.map((group, groupIndex) => (
            <Stack key={groupIndex} spacing="4">
              <Stack spacing="1">
                <Text
                  textAlign="center"
                  fontWeight={theme.fonts.subHeading.weight}
                  // mb="2"
                  color={theme.companyTheme.color.third}
                  fontSize={theme.fonts.subHeading.size} 
                  
                >
                  {group[0].heading}
                </Text>
              </Stack>
              <Stack direction="row" spacing="10" width="100"> {/* Set width to 100% to take full width */}
                {group.map((member) => (
                  <Stack key={member.name} spacing="5" flex="3"> {/* Set flex to 1 for equal distribution */}
                    <AspectRatio ratio={3/ 3}>
                      <Img
                        src={member.image}
                        alt={member.name}
                        objectFit="cover"
                      />
                    </AspectRatio>
                    <Stack spacing="1">
                      <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                        {member.name}
                      </Text>
                      <Text color="accent" fontSize={{ base: 'md', md: 'lg' }}>
                        {member.role}
                      </Text>
                    </Stack>
                    <HStack spacing="4"  color={theme.companyTheme.color.third}>
                      {[FaLinkedin].map((item, id) => (
                        <Link href={member.item}  target="_blank" key={id}>
                          <Icon as={item} boxSize="5" />
                        </Link>
                      ))}
                    </HStack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default TeamCards;

const members= [
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
