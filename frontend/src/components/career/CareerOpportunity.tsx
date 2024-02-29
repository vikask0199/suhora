import {
    Accordion, Container, Heading, SimpleGrid, Stack, Text
    ,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Badge,
    Button,
    HStack,
    Icon,
    Box,
    Flex
} from '@chakra-ui/react'
import theme from '../../theme'
import { MdAccessTime, MdLocationOn } from 'react-icons/md'
// import { jobListings } from './data'

const CareerOpportunity = () => (
    <Box py={{ base: '4', md: '8', lg: '12' }} >
        <Container maxW='5xl'>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
                <Stack spacing={{ base: '4', md: '6' }}>
                    <Stack spacing="4">

                        <Flex alignContent='center'>
                            <Heading fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color={theme.companyTheme.color.secondry}>
                                Open Positions
                            </Heading>
                        </Flex>

                    </Stack>
                    <Text  fontSize={theme.fonts.description}>
                        Explore exciting job opportunities at our company and join a dynamic team dedicated to
                        innovation and excellence.
                    </Text>
                </Stack>
                <Accordion >
                    {jobListings.map((listing, id) => (
                        <AccordionItem py="4">
                            <AccordionButton gap={4} px="0">
                                <Text as="h2" fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} color={theme.companyTheme.color.secondry}>
                                    {listing.title}
                                </Text>
                                <Badge variant="pill" fontSize={theme.fonts.subHeadingThird.size} fontWeight={theme.fonts.subHeadingThird.weight} color={theme.companyTheme.color.secondry}>{listing.department}</Badge>
                            </AccordionButton>
                            <AccordionPanel px="0">
                                <Stack spacing={{ base: '6', md: '8' }}>
                                    <Stack spacing={{ base: '4', md: '5' }}>
                                        <Text fontSize={theme.fonts.description}>{listing.description}</Text>
                                        <HStack spacing={{ base: '5', md: '6' }}>
                                            <HStack  color={theme.companyTheme.color.secondry}>
                                                <Icon as={MdLocationOn} boxSize="5" />
                                                <Text as="span">{listing.location}</Text>
                                            </HStack>
                                            <HStack  color={theme.companyTheme.color.secondry}>
                                                <Icon as={MdAccessTime} boxSize="5" />
                                                <Text as="span">{listing.type}</Text>
                                            </HStack>
                                        </HStack>
                                    </Stack>
                                    <Button bgColor= {theme.companyTheme.color.secondry} color='white' alignSelf="start">Apply Now</Button>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </SimpleGrid>
        </Container>
        
    </Box>
    
)

export default CareerOpportunity



const jobListings = [
    {
        uid: 'job001',
        title: 'Software Engineer',
        department: 'Engineering',
        description:
            'We are seeking a talented software engineer to join our team and contribute to the development of cutting-edge software solutions. You will collaborate with cross-functional teams to design, implement, and test software applications.',
        location: 'San Francisco, CA',
        type: 'Full-Time',
    },
    {
        uid: 'job002',
        title: 'Marketing Specialist',
        department: 'Marketing',
        description:
            'As a marketing specialist, you will be responsible for developing and executing marketing campaigns to promote our products and services. You will work closely with the marketing team to identify target audiences, create compelling content, and analyze campaign performance.',
        location: 'New York, NY',
        type: 'Full-Time',
    },
    {
        uid: 'job003',
        title: 'Sales Associate',
        department: 'Sales',
        description:
            'Join our sales team as a sales associate and help drive revenue growth. You will engage with potential customers, build relationships, and provide product demonstrations. Your goal will be to understand customer needs and close deals effectively.',
        location: 'Chicago, IL',
        type: 'Part-Time',
    },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
>
    ? ElementType
    : never

export type JobListing = ElementType<typeof jobListings>