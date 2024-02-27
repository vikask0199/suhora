import hydroImage from "../../assets/img/services/planet-2087558_1920.jpg"
import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Hydrology = () => {
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
                <Heading as='h1' size='xl' color="teal" top="50%" left="44.1%" position="absolute">Hydrology</Heading>
            </Box>

            <Box display="flex" justifyContent="center" p="5vh">
                <Heading as='h1' size='xl' color="teal">
                    Hydrology
                </Heading>
            </Box>

            <Box>
                <Box display="flex" m="auto" w="63%" fontSize="lg" p="2vh" color="grey">
                    <Text>
                        Any large infrastructure project – ranging from buildings to bridges, roads and dams – experience significant risk through its entire life cycle. In the typical planning process, the management of risk isn’t accounted for which leads to significant challenges for all involved entities.
                    </Text>
                </Box>
                <Box display="flex" m="auto" w="63%" fontSize="lg" p="2vh" color="grey">
                    <Text>
                        Some of the major challenges experienced range from cost overruns, to delays, failed procurement, or unavailability of private financing. Direct value losses due to undermanagement of risks for today’s pipeline of large-scale projects may exceed $1.5 trillion in the next five years, not to mention the loss in GDP growth, as well as reputational and societal effects.
                    </Text>
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" py="5vh">
                <Box h="auto" maxW="5xl" bg="whitesmoke">
                    <Flex justifyContent="space-between">
                        <Box>
                            <Box>
                                <Heading as='h2' size='lg' p="4vh">
                                    About  Hydrology
                                </Heading>
                            </Box>
                            <Box px="3.5vh">
                                <Flex alignItems="center" mb="2vh" fontSize="md" color="grey" >
                                    <Box color="blue" mr="2vh"><BsFillPatchCheckFill /></Box>
                                    <Box>Data As-a-Service through Platform & API</Box>
                                </Flex>
                                <Flex alignItems="center" mb="2vh" fontSize="md" color="grey">
                                    <Box color="blue" mr="2vh"><BsFillPatchCheckFill /></Box>
                                    <Box>Multi Mission Planning & Tasking & Visualization Platform</Box>
                                </Flex>
                                <Flex alignItems="center" mb="2vh" fontSize="md" color="grey">
                                    <Box color="blue" mr="2vh"><BsFillPatchCheckFill /></Box>
                                    <Box>Guaranteed collection, Secure tasking, Secure downlink</Box>
                                </Flex>
                                <Flex alignItems="center" mb="2vh" fontSize="md" color="grey">
                                    <Box color="blue" mr="2vh"><BsFillPatchCheckFill /></Box>
                                    <Box>24/7 all weather Surveillance using Optical and SAR Constellation</Box>
                                </Flex>
                                <Flex alignItems="center" mb="2vh" fontSize="md" color="grey">
                                    <Box color="blue" mr="2vh"><BsFillPatchCheckFill /></Box>
                                    <Box>Most Cost-Effective Solution available in Market</Box>
                                </Flex>
                            </Box>
                            <Box px="3.5vh" mt="5.5vh">
                                <Button colorScheme='telegram' rightIcon={<FaArrowRight />}>Request Demo</Button>
                            </Box>
                        </Box>
                        <Box display="flex" h="60vh" justifyContent="center" alignItems="center" p="2vh">
                            <Image h="50vh" width="100%" borderRadius="2vh" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
                        </Box>
                    </Flex>
                </Box>
            </Box>



            <Box display="flex" justifyContent="center" py="5vh" >
              <Box maxW="5xl" h="auto" bg="whitesmoke">
                <Box display="flex" justifyContent="center">
                  <Flex>
                    <Box m="5vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center"> 
                        <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png"/></Box>
                        <Box color="grey" fontSize="md"  w="10vw" textAlign='center'>SATELLILTE DATA</Box>
                        <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>
                    </Box>
                    <Box m="5vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                        <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png"/></Box>
                        <Box color="grey" fontSize="md"  w="10vw" textAlign='center'>ECONOMIC & AFFLUENCE DATA </Box>
                        <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>

                    </Box>
                    <Box m="5vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                        <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png"/></Box>
                        <Box color="grey" fontSize="md"  w="10vw" textAlign='center'>WEATHER DATA</Box>
                        <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>

                    </Box>
                    <Box m="5vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                        <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png"/></Box>
                        <Box color="grey" fontSize="md"  w="10vw" textAlign='center'>INSURANCE DATA</Box>
                        <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>

                    </Box>
                    <Box m="5vh" display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                        <Box><Image h="10vh" src="https://www.freeiconspng.com/thumbs/satellite-png/satellite-png-2.png"/></Box>
                        <Box color="grey" fontSize="md" w="10vw" textAlign='center'>CUSTUMER & GEOTAG DATA</Box>
                        <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>

                    </Box>
                    </Flex>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Button w="60vw"  colorScheme='green' fontSize="md" >SATSURE INFRASTRUCTURE SUITE</Button>
                  </Box>

                  <Box display="flex" justifyContent="center" mt="2vh">
                      <Flex>
                        <Box  display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                         <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>
                          <Box display="flex" alignItems="center" h="12vh" w="12vw" bg="lightgray" m="3vh" p="1vh" >
                              <Text textAlign="center" fontSize="sm" fontWeight="500">BUILDING MASK LAND USE RISK MAP</Text>
                          </Box>
                        </Box>
                        <Box  display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                         <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>
                          <Box display="flex" alignItems="center" h="12vh" w="12vw" bg="lightgray" m="3vh" p="1vh" >
                              <Text textAlign="center" fontSize="sm" fontWeight="500">FLOOR RISK MANAGEMENT</Text>
                          </Box>
                        </Box>
                        <Box  display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                         <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>
                          <Box display="flex" alignItems="center" h="12vh" w="12vw" bg="lightgray" m="3vh" p="1vh" >
                              <Text textAlign="center" fontSize="sm" fontWeight="500">TRANSPORTATION INFRASTRUCTURE RISK</Text>
                          </Box>
                        </Box>
                        <Box  display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                         <Box color="gray" mt="2vh" fontSize="3vh"><FaArrowDownLong/></Box>
                          <Box display="flex" alignItems="center" h="12vh" w="12vw" bg="lightgray" m="3vh" p="1vh" >
                              <Text textAlign="center" fontSize="sm" fontWeight="500">POLICY DECISION MAKING</Text>
                          </Box>
                        </Box>
                      </Flex>
                  </Box>


                </Box>


            </Box>



        </Box>
    )
}

export default Hydrology
