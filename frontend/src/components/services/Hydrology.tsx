import { Box, Button, Container, Flex, HStack, Heading, Icon, Image, Skeleton, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import hydroImage from "../../assets/img/product/planet-2087558_1920.jpg";
import theme from "../../theme";


type hydrologyThemeProps = {
    currentTheme: string
}


const Hydrology = ({ currentTheme }: hydrologyThemeProps) => {
    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';


    return (
        <Box>
            <Box position="relative">
                <Flex position="relative">
                    <Image
                        src={hydroImage}
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
                <Text fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} color="white" top="50%" left="44.1%" position="absolute">Hydrology</Text>
            </Box>


            <Box backgroundColor={backgroundColor} width="100%">
                <Container py={{ base: '4', md: '8', lg: '12' }} maxW="5xl">
                    <Stack spacing={{ base: '8', md: '10' }} align="center" mx="auto">
                        <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
                            <Text fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>About Hydrology</Text>
                            <Text fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight}>
                                We will contact you when there are new components to discover.
                            </Text>
                        </Stack>
                        <Text textAlign="justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sequi, molestias consectetur rerum officiis ipsam totam aut architecto, fugit neque, asperiores nam nulla. Dolorum sint eos perferendis doloribus autem harum laudantium eligendi velit eum, molestias optio fuga itaque officia fugit! Sint nostrum, dolores, cumque quod accusantium in odio eaque optio provident nemo blanditiis tempore minima accusamus aut aliquid ad ipsa voluptates delectus id voluptate nulla? A distinctio tenetur, vitae totam odit rerum nobis ipsa, molestiae deserunt nulla provident. Neque iusto, aut excepturi nesciunt molestiae earum! Quasi, aliquam. Hic, recusandae commodi, blanditiis, libero rem quasi tempora in accusantium delectus fuga ut?
                        </Text>
                    </Stack>
                </Container>
            </Box>


            <Box width="100%">
                <Box maxW="5xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
                    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
                        <Box
                            width={{ lg: 'sm' }}
                            transform={{ base: 'translateY(-50%)', lg: 'none' }}
                            bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
                            mx={{ base: '6', md: '8', lg: '0' }}
                            px={{ base: '6', md: '8', lg: '0' }}
                            py={{ base: '6', md: '8', lg: '12' }}
                        >
                            <Stack spacing={{ base: '8', lg: '10' }}>
                                <Stack spacing={{ base: '2', lg: '4' }}>
                                    <Heading color={theme.companyTheme.color.secondry}>
                                        Misguided
                                    </Heading>
                                    <Heading size="xl" fontWeight="normal">
                                        Refresh your wardrobe
                                    </Heading>
                                </Stack>
                                <HStack spacing="3">
                                    <Button color={useColorModeValue('red.500', 'red.300')} >
                                        Discover now
                                    </Button>
                                    <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
                                </HStack>
                            </Stack>
                        </Box>
                        <Flex flex="1" overflow="hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                alt="Lovely Image"
                                fallback={<Skeleton />}
                                maxH="450px"
                                minW="300px"
                                objectFit="cover"
                                flex="1"
                            />
                            <Image
                                display={{ base: 'none', sm: 'initial' }}
                                src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                alt="Lovely Image"
                                fallback={<Skeleton />}
                                maxH="450px"
                                objectFit="cover"
                            />
                        </Flex>
                    </Stack>
                </Box>
            </Box>


            <Box background={backgroundColor}
                mb="10vh"
                px={{ base: '4', md: '8', lg: '5' }}
                py={{ base: '4', md: '8', lg: '12' }}
            >
                <Box display="flex" justifyContent="center"
                    maxW="5xl"
                    mx="auto"
                    px={{ base: '4', md: '8', lg: '5' }}
                    py={{ base: '4', md: '8', lg: '12' }}
                    boxShadow='xl'
                >
                    <Box>
                        <Box display="flex" justifyContent="center">
                            <Flex>
                                <Box m="3vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png" /></Box>
                                    <Box color="grey" fontSize="md" w="10vw" textAlign='center'>SATELLILTE DATA</Box>
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                </Box>
                                <Box m="3vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png" /></Box>
                                    <Box color="grey" fontSize="md" w="10vw" textAlign='center'>ECONOMIC & AFFLUENCE DATA </Box>
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>

                                </Box>
                                <Box m="3vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png" /></Box>
                                    <Box color="grey" fontSize="md" w="10vw" textAlign='center'>WEATHER DATA</Box>
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                </Box>
                                <Box m="3vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png" /></Box>
                                    <Box color="grey" fontSize="md" w="10vw" textAlign='center'>INSURANCE DATA</Box>
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                </Box>
                                <Box m="3vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png" /></Box>
                                    <Box color="grey" fontSize="md" w="10vw" textAlign='center'>CUSTUMER & GEOTAG DATA</Box>
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                </Box>
                            </Flex>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Button w="60vw" colorScheme='green' fontSize="md" >SATSURE INFRASTRUCTURE SUITE</Button>
                        </Box>

                        <Box display="flex" justifyContent="center" mt="2vh">
                            <Flex>
                                <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                    <Box display="flex" alignItems="center" h="12vh" w="12vw" boxShadow="xl" m="3vh" p="1vh" >
                                        <Text textAlign="center" fontSize="sm" fontWeight="500">BUILDING MASK LAND USE RISK MAP</Text>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                    <Box display="flex" alignItems="center" h="12vh" w="12vw" boxShadow="xl" m="3vh" p="1vh" >
                                        <Text textAlign="center" fontSize="sm" fontWeight="500">FLOOR RISK MANAGEMENT</Text>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                    <Box display="flex" alignItems="center" h="12vh" w="12vw" boxShadow="xl" m="3vh" p="1vh" >
                                        <Text textAlign="center" fontSize="sm" fontWeight="500">TRANSPORTATION INFRASTRUCTURE RISK</Text>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                                    <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong /></Box>
                                    <Box display="flex" alignItems="center" h="12vh" w="12vw" boxShadow="xl" m="3vh" p="1vh" >
                                        <Text textAlign="center" fontSize="sm" fontWeight="500">POLICY DECISION MAKING</Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hydrology
