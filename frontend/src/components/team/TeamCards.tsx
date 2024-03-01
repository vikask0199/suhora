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
    Flex
  } from '@chakra-ui/react'
  import {  FaLinkedin } from 'react-icons/fa'
  import theme from '../../theme'
  type spadeFeatureProps = {
    currentTheme: string
  }
  const TeamCards = ({ currentTheme }: spadeFeatureProps) => (
    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

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
                <Img src={member.image} alt={member.name} h="72" objectFit="cover" />
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
                  <Link href="#" key={id}>
                    <Icon as={item} boxSize="5" />
                  </Link>
                ))}
              </HStack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
  export default TeamCards
  export const members = [
    {
      role: 'Co-Founder / CEO',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Camila West',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      role: 'Co-Founder / CTO',
      image:
        'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Mark Linhsorg',
      description: 'Habitant morbi tristique senectus et netus et malesuada fames vestibulum.',
    },
    {
      role: 'Marketing Manager',
      image:
        'https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Kim Yung',
      description: 'Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.',
    },
    {
      role: 'Manager, Business Relations',
      image:
        'https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Morgan Adebayo',
      description: 'Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna.',
    },
    {
      role: 'Chief Operating Officer',
      image:
        'https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Bimbo Akintola',
      description: 'Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas.',
    },
    {
      role: 'Head of Human Resources',
      image:
        'https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      name: 'Yasmine Jones',
      description: 'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat.',
    },
  ]