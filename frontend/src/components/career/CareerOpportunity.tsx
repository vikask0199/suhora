import {
    Accordion, Container, Heading, SimpleGrid, Stack, Text
    ,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    Badge,
    Button,
    HStack,
    Icon,
    Box,
    Flex
} from '@chakra-ui/react'
import theme from '../../theme'
import { MdAccessTime, MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'


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
                    <Text fontSize={theme.fonts.description}>
                        Explore exciting job opportunities at our company and join a dynamic team dedicated to
                        innovation and excellence.
                    </Text>
                </Stack>
                <Accordion allowMultiple >
                    {jobListings.map((listing, id) => (
                        <AccordionItem py="4" key={id}>
                            <AccordionButton gap={4} px="0" >

                                <Text as="h2" fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} color={theme.companyTheme.color.secondry}>
                                    {listing.title}
                                </Text>
                                <Badge as="span" flex='2' textAlign='left' variant="pill" fontSize={theme.fonts.subHeadingThird.size} fontWeight={theme.fonts.subHeadingThird.weight} color={theme.companyTheme.color.secondry}>{listing.department}</Badge>
                                <AccordionIcon mr={4} />
                            </AccordionButton>
                            <AccordionPanel px="0">
                                <Stack spacing={{ base: '6', md: '8' }}>
                                    <Stack spacing={{ base: '4', md: '5' }}>
                                        <Text fontSize={theme.fonts.description} textAlign='justify'>{listing.description}</Text>
                                        <HStack spacing={{ base: '5', md: '6' }}>
                                            <HStack color={theme.companyTheme.color.secondry}>
                                                <Icon as={MdLocationOn} boxSize="5" />
                                                <Text as="span">{listing.location}</Text>
                                            </HStack>
                                            <HStack color={theme.companyTheme.color.secondry}>
                                                <Icon as={MdAccessTime} boxSize="5" />
                                                <Text as="span">{listing.type}</Text>
                                            </HStack>
                                        </HStack>
                                    </Stack>
                                    <Link to="https://forms.gle/WuPup8tB797ENhVm8" target='_blank'>
                                    <Button bgColor={theme.companyTheme.color.secondry} color='white' alignSelf="start">Apply Now</Button>
                                    </Link>
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
            "We're looking for a talented Web Developer with 1-2 years of experience and expertise in Geo-Spatial technology and Chakra UI to join our team. Dive into exciting projects, enhance your skills, and explore growth opportunities in a dynamic environment. Requirements: Bachelor's degree in Computer Science or related field, proficiency in web development technologies (HTML, CSS, JavaScript), experience with Geo-Spatial technology (e.g., Mapbox, Google Maps API), strong understanding of Chakra UI, and familiarity with React.js",
        location: 'Sec-62, Noida, India',
        type: 'Full-Time',
    },
    {
        uid: 'job002',
        title: 'Account Executive',
        department: 'Accounts',
        description:
            "We're seeking an experienced Accountant with 1-2 years of relevant experience to join our team. Dive into challenging projects, refine your skills, and explore growth opportunities in a dynamic environment. Requirements: Bachelor's degree in Accounting or related field, proficiency in accounting software (e.g., Tally), strong analytical skills, attention to detail, and ability to work independently.",
        location: 'Sec-62, Noida, India',
        type: 'Full-Time',
    },
    {
        uid: 'job003',
        title: 'UI/UX Designer',
        department: 'Designer',
        description:"We're looking for a skilled UI/UX Designer with 1-2 years of experience to join our team. Collaborate on real-world projects, refine your skills, and explore growth opportunities in a dynamic environment. Requirements: Bachelor's degree in Graphic Design or related field, proficiency in Figma (preferred), strong understanding of UI/UX principles, experience with Sketch, ProtoPie, Wireframe.cc, and video editing tools is a plus.",
        location: 'Sec-62, Noida, India',
        type: 'Full-Time',
    },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
>
    ? ElementType
    : never

export type JobListing = ElementType<typeof jobListings>