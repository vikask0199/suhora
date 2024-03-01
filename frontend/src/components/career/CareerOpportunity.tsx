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
                                        <Text fontSize={theme.fonts.description}>{listing.description}</Text>
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
                                    <Button bgColor={theme.companyTheme.color.secondry} color='white' alignSelf="start">Apply Now</Button>
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
            'Innovative software engineer proficient in development tools. Strong problem-solving skills, collaborative mindset, and ability to thrive in fast-paced environments. Experience with relevant technologies/platforms preferred.',
        location: 'Sec-62, Noida, India',
        type: 'Full-Time',
    },
    {
        uid: 'job002',
        title: 'Account Executive',
        department: 'Accounts',
        description:
            'Dynamically driven Account Executive with exceptional communication and negotiation skills. Proven track record in achieving sales targets, fostering client relationships, and driving revenue growth. Previous experience in industry/sector advantageous.',
        location: 'Sec-62, Noida, India',
        type: 'Full-Time',
    },
    {
        uid: 'job003',
        title: 'UI/UX Designer',
        department: 'Designer',
        description:
            'Talented UI/UX Designer blending creativity with user-centric design principles. Proficient in Adobe Creative Suite, Sketch, and prototyping tools. Passionate about crafting seamless digital experiences that delight and engage users.',
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