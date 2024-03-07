
import { Box, Flex, Img, Button } from '@chakra-ui/react'
import theme from '../../theme'
import contact from '../../assets/img/contact-us.webp'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { textVarient } from '../../animation'

const AnimateButton = motion(Button)

const CareerContact = () => {
    return (
        <>
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
                        <Flex justifyContent='center'>
                            <Link to='/contact-us' >
                                <AnimateButton variants={textVarient} whileInView="show" initial="hidden"
                                    colorScheme="blue"
                                    backgroundColor={theme.companyTheme.color.secondry}

                                    w='13em'
                                    rounded="full"
                                    size="lg"
                                    fontSize={theme.fonts.subHeadingThird.size} fontWeight={theme.fonts.subHeadingThird.weight}
                                >
                                    Contact us
                                </AnimateButton>
                            </Link>
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
                    align="center"
                >
                    <Box position="relative" w="full" h="full">
                        <Img
                            src={contact}
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
        </>
    )
}
export default CareerContact