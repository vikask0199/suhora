import {
    AspectRatio,
 
    Container,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Box
} from '@chakra-ui/react'
import missionImage from '../../assets/img/careerMission.jpg'
import theme from '../../theme'
const CareerMission = () => (
    <Box>
    <Container   maxW='5xl'>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} >
            <Stack spacing={{ base: '8', md: '12' }} justifyContent="center">
                <Stack spacing={{ base: '4', md: '6' }}>
                    <Heading color={theme.companyTheme.color.secondry} fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>Our Mission</Heading>
                    <Text fontSize={theme.fonts.description}>
                        Choose from over 180+ beautiful and responsive components and build your app twice as
                        fast. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates unde, 
                        aperiam laboriosam deserunt nostrum. Natus quae vel accusantium odit cupiditate,
                         facere dolore fugit dolorem, reiciendis doloremque, repellat consectetur ullam!
                    </Text>
                </Stack>
               
            </Stack>
            <AspectRatio ratio={1}>
                <Image src={missionImage} alt="Lady at work" p={20}  />
            </AspectRatio>
        </SimpleGrid>
    </Container>
    </Box>
)
export default CareerMission