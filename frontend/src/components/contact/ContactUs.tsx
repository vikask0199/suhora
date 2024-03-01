import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Img,
    Input,
    Stack,
    Text,
    Textarea,
    VStack,
    useColorModeValue
} from '@chakra-ui/react';
import { Fragment } from 'react';
// Here we have used react-icons package for the icons
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import AgricultureImg from '../../assets/img/Contactus2.jpg';
import theme from '../../theme';

const contactOptions = [
    {
        label: 'Address',
        value: '313, Tower-B, Noida One, Sector-62, Noida, Uttar Pradesh-201309, India',
        icon: GoLocation
    },
    {
        label: 'PHONE NUMBER',
        value: '+91 9999664437',
        icon: BsPhone
    },
    {
        label: 'EMAIL',
        value: 'hello@suhora.com',
        icon: HiOutlineMail
    }
];

type contactProps = {
    currentTheme: string
}

const ContactUs = ({ currentTheme }: contactProps) => {
    return (
        <Box >
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='6xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
                        <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <Heading  >
                                Contact Us
                            </Heading>


                        </Flex>
                        <Flex justifyContent='center'>
                            <Text mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                            </Text>
                        </Flex>
                    </Box>
                </Box>
                <Flex
                    id="image-wrapper"
                    position="absolute"
                    insetX="0"
                    insetY="0"
                    w="full"
                    h="full"
                    overflow="hidden"
                    align="center">
                    <Box position="relative" w="full" h="full">
                        <Img
                            src={AgricultureImg}
                            alt="Main Image"
                            w="full"
                            h="full"
                            objectFit="cover"
                            objectPosition="top bottom"
                            position="absolute"
                        />
                        <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
                    </Box>
                </Flex>
            </Box>
            <Container maxW="6xl" py={10} px={{ base: 5, md: 8 }}>
                <Stack spacing={10}>
                    <Stack
                        spacing={{ base: 6, md: 0 }}
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent="space-between">
                        {contactOptions.map((option, index) => (
                            <Fragment key={index}>
                                <Stack
                                    spacing={3}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    px={3}>
                                    <Icon as={option.icon} w={10} h={10} color={theme.companyTheme.color.secondry} />
                                    <Text fontSize="lg" fontWeight="semibold">
                                        {option.label}
                                    </Text>
                                    <Text fontSize="md" textAlign="end" >
                                        {option.value}
                                    </Text>
                                </Stack>
                            </Fragment>
                        ))}
                    </Stack>
                    <VStack
                        as="form"
                        spacing={8}
                        w="100%"
                        bg={useColorModeValue('white', 'gray.700')}
                        rounded="lg"
                        boxShadow="lg"
                        p={{ base: 5, sm: 10 }}>
                        <VStack spacing={4} w="100%">
                            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                                <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" placeholder="Ahmad" rounded="md" />
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder="test@test.com" rounded="md" />
                                </FormControl>
                            </Stack>
                            <FormControl id="subject">
                                <FormLabel>Subject</FormLabel>
                                <Input type="text" placeholder="Are you available for freelance work?" rounded="md" />
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Textarea size="lg" placeholder="Enter your message" rounded="md" />
                            </FormControl>
                        </VStack>
                        <VStack w="100%">
                            <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color={`${currentTheme === 'light' ? "#1266A0" : "white"}`} _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                Request Sample data
                            </Button>
                        </VStack>
                    </VStack>
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactUs;