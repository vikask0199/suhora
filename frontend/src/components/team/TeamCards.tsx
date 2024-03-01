import {
    Button,
    Container,
    Heading,
    HStack,
    Icon,
    Img,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
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
  type spadeFeatureProps = {
    currentTheme: string
  }
  const TeamCards = ({ currentTheme }: spadeFeatureProps) => {
    const aspectRatio = 3/ 3
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    return (
    <Container maxW='6xl' p={10}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack >
          <Stack>
           
          <Stack spacing={{ base: '4', md: '5' }}>
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Text>
                                
                                <Text as="span" color={theme.companyTheme.color.secondry}>Leadership </Text>
                                <Text as="span">Team </Text>
                            </Text>
                        </Flex>
                        <Text textAlign='center' color={theme.companyTheme.color.third} fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} maxW="6xl" >
                            Multi band high resolution image from various satellite.
                        </Text>
                        
                    </Stack>
          </Stack>
        
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap="8"
          rowGap={{ base: '10', lg: '16' }}
        >
          {members.map((member) => (
            <Stack key={member.name} spacing="4">
              <Stack spacing="5">
                <AspectRatio ratio={aspectRatio}>

                <Img src={member.image} alt={member.name}  objectFit="cover"  />
                </AspectRatio>
               
                <Stack spacing="1">
                  <Text fontWeight="medium" fontSize={{ base: 'lg', md: 'xl' }}>
                    {member.name}
                  </Text>
                  <Text color="accent" fontSize={{ base: 'md', md: 'lg' }}>
                    {member.role}
                  </Text>
                </Stack>
              </Stack>
              <HStack spacing="4" color={theme.aboutIcon.secondry}>
                {[FaLinkedin].map((item, id) => (
                  <Link href={member.item} key={id}>
                    <Icon as={item} boxSize="5" />
                  </Link>
                ))}
              </HStack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>)
  }


  export default TeamCards
const members = [
    
    {
      role: 'CEO and Co-Founder',
      image:krishnanu,
        item: 'https://www.linkedin.com/in/krishanuacharya/',
      name: 'Krishanu Acharya',
      
    },
    {
      role: 'CTO and Co-Founder',
      image:Rupesh,
        item:'https://www.linkedin.com/in/rupeshgupte/',
      name: 'Rupesh Kumar',
     
    },
    {
      role: 'COO and Co-Founder',
      image:Amit,
        item: 'https://www.linkedin.com/in/amitkumarsaini/',
      name: 'Amit Kumar',

    },
    {
      role: 'Director - Strategy',
      image:tanmoy,
      name: 'Tanmoy Adhikary',
      item: 'https://www.linkedin.com/in/tanmoy-adhikary-8132002/'
    },
    {
      role: 'Advisor',
      image:
      surojit,
      name: 'Surojit Bose',
     item: 'https://www.linkedin.com/in/surojitbose/'
    },
    {
      role: 'Advisor',
      image:Navneet ,
        
      name: 'Navneet Kaushik',
      item: 'https://www.linkedin.com/in/cdr-navneet-kaushik-veteran-98964b82/'
    },
  ]