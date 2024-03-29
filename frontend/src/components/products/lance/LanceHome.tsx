import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lance from "../../../assets/img/products/lance.png";
import monitor from "../../../assets/img/products/lance_header_image.webp";
import theme from '../../../theme';

type lanceProps = {
  currentTheme: string
}

export const LanceHome = ({ currentTheme }: lanceProps) => {
  // const aspectRatio = 3 / 4
  const AnimatedBox = motion(Box);
  const MotionBox = motion(Box);

  return (
    <Box as="section" minH="140px" h="auto" position="relative">
      <Box py="24" position="relative" zIndex={1}>
        <Flex justifyContent="space-between" position="relative" flexDirection={{ base: "column", md: "row" }}>
          <AnimatedBox width={{ base: "90%", md: "40%" }} px={{ base: '6', md: '8' }} initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ ease: "linear", duration: 1, delay: 0.2 }}>
            <Box >
              <Text fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                LANCE
              </Text>
              <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} mt="4" maxW="lg">
                Powering defense with human-AI synergy for unparalleled situational awareness and strategic readiness in a rapidly evolving world.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
                <Link to="/contact-us">
                  <Button width="fit-content" px="8" border={`1px solid ${currentTheme === 'light' ? '#174773' : 'white'}`} variant="outline" color={`${currentTheme === 'light' ? '#174773' : 'white'}`} _hover={{ backgroundColor: theme.companyTheme.color.secondry, border: `1px solid #1266A0`, color: currentTheme === 'light' ? '#fff' : undefined }}>
                    Request Demo
                  </Button>
                </Link>
              </Stack>
            </Box>
          </AnimatedBox>
          <Box width={{ base: "100%", md: "35%" }} marginTop="90px" position="relative" display={{ base: "none", md: "block" }}>
            <MotionBox
              initial={{ scale: 0, x: "-110%", y: "-50%" }}
              animate={{ scale: 1.1, x: "-110%", y: "-50%" }}
              transition={{ delay: 1, duration: 2, stiffness: 100, ease: "easeInOut", }}
              position="absolute"
              top={"50%"}
              left={"50%"}>
              <img src={monitor} alt="" />
              <Box position="absolute" top={0} left={0} height="67%" width="100%">
                <Box height="100%" width="100%" position="relative" overflow="hidden">
                  <MotionBox
                    initial={{ scale: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 2.0, x: "-50%", y: "-50%" }}
                    transition={{ delay: 3, duration: 2, stiffness: 100, ease: "easeInOut", }}
                    position="absolute"
                    top={"50%"}
                    left={"50%"}
                  >
                    <img src={lance} alt="" />
                  </MotionBox>
                  {/* <MotionBox
                    initial={{ scale: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 2.1, x: "-50%", y: "-50%" }}
                    transition={{ delay: 6, duration: 2, stiffness: 100, ease: "easeInOut", }}
                    position="absolute"
                    top={"50%"}
                    left={"50%"}
                  >
                    <img src={sidmain} alt="" />
                  </MotionBox> */}
                </Box>
              </Box>
            </MotionBox>
          </Box>
        </Flex>
      </Box>
      {/* <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center" display={{ base: "block", md: "none" }}>
        <Box position="relative" w="full" h="full">
          <AspectRatio ratio={aspectRatio}>
            <Img
              src={agre}
              alt="Main Image"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="top bottom"
              position="absolute"

            />
          </AspectRatio>
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex> */}
    </Box>
  )
}