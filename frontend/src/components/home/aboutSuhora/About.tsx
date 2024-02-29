import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import aboutImage from "../../../assets/img/services/about.jpg"
import partnerImage from "../../../assets/img/services/partner.png"
import analysis from '../../../assets/img/services/anlysis.jpg'
import highfruencencyImage from '../../../assets/img/services/high freuency.jpg'


type hydrologyThemeProps = {
    currentTheme: string
}



const About = ({ currentTheme }: hydrologyThemeProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';

    return (
        <Box >
            <Box position="relative">
                <Flex position="relative">
                    <Image
                        src={aboutImage}
                        alt="Lovely Image"
                        objectFit="cover"
                        width="100%"
                        height="md"
                    />
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        background="rgba(0, 0, 0, 0.6)"
                    />
                </Flex>
                <Heading as='h1' size="2xl" color="White" top="30%" left="42.8%" position="absolute">About Us</Heading>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Text color="White" position="absolute" w="60%" top="50%" textAlign="center">
                        SatSure is an innovative decision analytics leveraging advances in satellites remote sensing, machine learning and big data analytics to provide answers to large area questions across the domains of Agriculture, Banking & Financial Service, Infrastructure and Climate Change Mitigation.
                    </Text>
                </Box>
            </Box>

            <Box
                mx="auto"
                px={{ base: '4', md: '8', lg: '5' }}
                py={{ base: '4', md: '8', lg: '12' }}
                background={backgroundColor} 
            >
                <Box display="flex" justifyContent="center" p="5vh">
                    <Heading as='h1' size='2xl' color="teal">
                        Our Values
                    </Heading>
                </Box>

                <Box>
                    <Box display="flex" m="auto" w="63%" fontSize="lg" p="2vh" color="grey" >
                        <Text textAlign="center">
                            SatSure's foundations are based on expanding the vision of Dr. Vikram Sarabhai, the founder of the Indian space program, to be second to none in the applications of space technology. Through its unique decision intelligence creation approach, the SatSure team looks to be second to none in commercializing data from space towards solving problems at the nexus of sustainability of food, water, and energy security.
                        </Text>
                    </Box>

                </Box>
            </Box>

  
            <Box
                mx="auto"
                px={{ base: '4', md: '8', lg: '5' }}
                py={{ base: '4', md: '8', lg: '12' }}
                boxShadow="xl"
                h="64vh"
                maxW="5xl"
                display="flex"
                alignItems="center"
                flexDirection="column"
                mt="10vh"
                mb="10vh"
            >
                <Flex justifyContent="space-between" alignItems="center" >

                    <Box w="18vw" h="45vh" bg="White" boxShadow="xl" borderRadius="md" m="3vh" p="2vh">
                    <Box display="flex" justifyContent="center">
                            <Image  mt="2vh" h="5vh" w="5vh" src={highfruencencyImage}/>   
                        </Box>
                            <Heading as='h4' size='md' mt="3vh" color="grey" textAlign="center" > 
                                High-Frequency, Global Coverage
                             </Heading>
                             <Text mt="6vh" color="grey" fontSize="md"  textAlign="center">
                             Monitor your world with the most up-to-date, global satellite data, captured daily.
                             </Text>
                    </Box>
                    <Box w="18vw" h="45vh" bg="White" boxShadow="xl" borderRadius="md" m="3vh" p="2vh">
                    <Box display="flex" justifyContent="center">
                            <Image  mt="2vh" h="5vh" w="5vh" src={analysis}/>   
                        </Box>
                            <Heading as='h4' size='md' mt="3vh" color="grey" textAlign="center" > 
                            Analysis-Ready Data
                             </Heading>
                             <Text mt="6vh" color="grey" fontSize="md"  textAlign="center">
                             Focus your investments on solving core problems with clean, consistent, and harmonized data.
                             </Text>
                    </Box>
                    <Box w="18vw" h="45vh" bg="White" boxShadow="xl" borderRadius="md" m="3vh" p="2vh">
                    <Box display="flex" justifyContent="center">
                            <Image  mt="2vh" h="5vh" w="5vh" src={partnerImage}/>   
                        </Box>
                            <Heading as='h4' size='md' mt="3vh" color="grey" textAlign="center"  >
                            Trusted Partner
                             </Heading>
                             <Text mt="6vh" color="grey" fontSize="md"  textAlign="center">
                             Realize value quickly with Planet’s suite of professional services, exceptional customer support, and a global community of users.
                             </Text>
                    </Box>
                </Flex>
            </Box>



        </Box>
    )
}

export default About


