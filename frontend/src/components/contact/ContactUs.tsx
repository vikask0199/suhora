import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Icon,
    Img,
    Input,
    Spinner,
    Stack,
    Text,
    Textarea,
    VStack,
    useColorModeValue
} from '@chakra-ui/react';
import axios from "axios";
import { motion } from 'framer-motion';
import { Fragment, useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { textVarient, textVarientDelayMedium, textVarientSecond, textvarientOneSecondDelay } from '../../animation';
import contact2 from '../../assets/img/contact/Contactus2.jpg';
import theme from '../../theme';


const AnimatedHeading = motion(Heading)
const AnimatedText = motion(Text)
const AnimatedStack = motion(Stack)
const AnimatedFormControl = motion(FormControl)
const AnimatedVStack = motion(VStack)

const contactOptions = [
    {
        label: 'Address',
        valuee: 'Noida, Uttar Pradesh, India, 201309',
        value: '313, Tower-B, Noida One, Sector-62,',
        icon: GoLocation,
        link: "https://maps.app.goo.gl/w2MfioZfebut4tgD9"
    },
    {
        label: 'PHONE NUMBER',
        value: '+91 9999664437',
        icon: BsPhone,
        link: 'https://wa.me/+919999664437'
    },
    {
        label: 'EMAIL',
        value: 'hello[at]suhora.com',
        icon: HiOutlineMail,
        link: "mailto:hello@suhora.com"
    }
];

type contactProps = {
    currentTheme: string
}




const ContactUs = ({ currentTheme }: contactProps) => {
    // validation
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState<string>("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState<string>("")
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPhone(value);
        const phoneRegex = /^[0-9+]{0,}$/;
        if (!phoneRegex.test(value)) {
            setPhoneError("Invalid phone number");
        } else {
            setPhoneError("");
        }
    }


    const [name, setName] = useState("")
    const [nameError, setNameError] = useState<string>("");
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setName(value);
        const nameRegex = /^[A-Za-z]{3,20}$/;
        if (!nameRegex.test(value)) {
            setNameError("Name should contain only alphabets.");
        } else {
            setNameError("");
        }
    };


    const [subject, setSubject] = useState("")
    const [subjectError, setSubjectError] = useState<string>("");
    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSubject(value);
        if (!value.trim()) {
            setSubjectError("Subject cannot be empty");
        } else {
            setSubjectError("");
        }
    };

    const [message, setMessage] = useState("")
    const [messageError, setMessageError] = useState<string>("");
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setMessage(value);
        if (!value.trim()) {
            setMessageError("Message cannot be empty");
        } else {
            setMessageError("");
        }
    };


    // captch
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState<boolean>(false)
    const onChange = () => {
        const isVerified = verifyCaptcha();
        if (isVerified) {
            setIsVerifiedCaptcha(true)
        }
        else {
            setIsVerifiedCaptcha(false)
        }
    };

    const verifyCaptcha = (): boolean => {
        return recaptchaRef.current?.getValue() !== '';
    };


    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const handleClick = () => {
        const postData = {
            namd: name,
            email: email,
            phone: phone,
            message: message,
            subject: subject
        };

        if (name && email && phone && message && subject) {
            if (isVerifiedCaptcha) {
                setIsSubmitting(true)
                axios.post('https://review.suhora.com/send/', postData)
                    .then((response) => {
                        console.log(response);
                        setName(""),
                            setEmail(""),
                            setPhone(""),
                            setMessage(""),
                            setSubject("")
                        window.alert("Our support team will get back to you.")
                        setIsSubmitting(false)
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000)
                    })
                    .catch(() => {
                        setIsSubmitting(false)
                        window.alert("Please try after some times")
                    });
            } else {
                setIsSubmitting(false)
                setIsVerifiedCaptcha(false)
                window.alert("Please verify captcha")
            }
        } else {
            setIsSubmitting(false)
            window.alert("Please fill all the fields")
        }
    };





    return (
        <Box >
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='6xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
                        <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimatedHeading variants={textVarient} whileInView="show" initial="hidden"  >
                                Contact Us
                            </AnimatedHeading>
                        </Flex>
                        <Flex justifyContent='center'>
                            <AnimatedText variants={textVarientSecond} textAlign="center" whileInView="show" initial="hidden" mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                We believe in the power of communication. Reach out to us and let's build something amazing together.
                            </AnimatedText>
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
                            src={contact2}
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
                                <AnimatedStack variants={textVarientDelayMedium} initial="hidden" whileInView="show"
                                    spacing={1}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    px={3}>
                                    <Icon as={option.icon} w={10} h={10} color={theme.companyTheme.color.secondry} />
                                    <Text fontSize="lg" fontWeight="semibold">
                                        {option.label}
                                    </Text>
                                    <Link to={option.link} target="_blank">
                                        <Text fontSize="lg" textAlign="end" >
                                            {option.value}

                                        </Text>
                                    </Link>
                                    <Text fontSize="lg" textAlign="end">{option.valuee}</Text>
                                </AnimatedStack>
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
                        <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimatedText variants={textVarient} initial="hidden" whileInView="show">
                                <Text as="span">Get in</Text>
                                <Text as="span" color={theme.companyTheme.color.secondry}> Touch</Text>
                            </AnimatedText>
                        </Flex>
                        <VStack spacing={4} w="100%">
                            <AnimatedStack variants={textVarientSecond} whileInView="show" initial="hidden" w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                                <FormControl id="name" isInvalid={!!nameError}>
                                    <Input type="text" value={name} onChange={handleNameChange} placeholder="Your Name" rounded="md" />
                                    <FormErrorMessage>{nameError}</FormErrorMessage>
                                </FormControl>
                                <FormControl id="email" isInvalid={!!emailError}>
                                    <Input type="email" value={email} onChange={handleEmailChange} placeholder="Your Email" rounded="md" />
                                    <FormErrorMessage>{emailError}</FormErrorMessage>
                                </FormControl>
                            </AnimatedStack>
                            <AnimatedStack variants={textVarientDelayMedium} whileInView="show" initial="hidden" w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                                <FormControl id="phone" isInvalid={!!phoneError}>
                                    <Input type="text" value={phone} onChange={handlePhoneChange} placeholder="Contact Number" rounded="md" />
                                    <FormErrorMessage>{phoneError}</FormErrorMessage>
                                </FormControl>
                                <FormControl id="sub" isInvalid={!!subjectError}>
                                    <Input type="text" value={subject} onChange={handleSubjectChange} placeholder="Subject" rounded="md" />
                                    <FormErrorMessage>{subjectError}</FormErrorMessage>
                                </FormControl>
                            </AnimatedStack>
                            <AnimatedFormControl id="message" variants={textvarientOneSecondDelay} whileInView="show" initial="hidden" isInvalid={!!messageError}>
                                <Textarea size="lg" value={message} placeholder="Message" onChange={handleMessageChange} rounded="md" />
                                <FormErrorMessage>{messageError}</FormErrorMessage>
                            </AnimatedFormControl>
                        </VStack>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LfbIJYpAAAAACLFTOz-Y2pPz-eMlVRgpDZNR5wI"
                            onChange={onChange}
                        />
                        <AnimatedVStack w="100%" variants={textvarientOneSecondDelay} whileInView="show" initial="hidden">
                            <Button onClick={handleClick} width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color={`${currentTheme === 'light' ? "#1266A0" : "white"}`} _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                                {isSubmitting ? (
                                    <Spinner
                                        thickness='2px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                    />
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </AnimatedVStack>
                    </VStack>
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactUs;