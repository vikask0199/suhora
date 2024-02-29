
import { Box, Flex, Heading, Img, Text, Button, Stack, } from '@chakra-ui/react'
import theme from '../../theme'

import contact from '../../assets/img/contact us.jpg'

const AgricultureContactUs = () => {
    return (
        <>
            <Box as="section" minH="140px" position="relative" p={10} >
                <Box py="32" position="relative" zIndex={1} >
                    <Box maxW='5xl' mx="auto" px={{ base: '6', md: '8' }} color="white" >
                        <Flex justifyContent='center'>
                            <Button


                                colorScheme="blue"
                                backgroundColor={theme.companyTheme.color.secondry}

                                w='13em'
                                rounded="full"
                                size="lg"
                                fontSize={theme.fonts.subHeadingThird.size} fontWeight={theme.fonts.subHeadingThird.weight}
                            >
                                Contact Sales
                            </Button>
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
export default AgricultureContactUs
