import {
    Box,
    Flex,
    Heading,
    Img,
    Text
} from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { textVarient, textVarientSecond } from '../../animation'
import bgsuhora from '../../assets/img/bg-suhora.png'
import theme from '../../theme'

const AnimatedHeading = motion(Heading)
const AnimatedText = motion(Text)

const GalleryHeader = () => {

    // const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    return (
        <>
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='5xl' mx="auto" px={{ base: '3', md: '8' }} color="white" >
                        <Flex justifyContent='center' fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                            <AnimatedHeading variants={textVarient} initial="hidden" whileInView="show"  >
                                Imaging Capabilities
                            </AnimatedHeading>

                        </Flex>
                        <Flex justifyContent='center' textAlign='center'>
                            <AnimatedText textAlign="center" variants={textVarientSecond} initial="hidden" whileInView="show" mt='1em' fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} >
                                Showcasing Satellite Imaging Unrivaled Surveillance Solutions, Your Budget Friendly Choice
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
                            src={bgsuhora}
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

export default GalleryHeader
