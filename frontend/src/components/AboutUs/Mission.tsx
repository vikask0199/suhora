import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { homeProductLeftToRight, homeProductRightToLeft, textVarientSecond } from "../../animation"
import VissionImg from '../../assets/img/Vision_Imagery.png'
import MissionImg from '../../assets/img/our_mission.webp'
import theme from "../../theme"
interface aboutSuhoraProps {
    currentTheme: string
}

const Mission = ({ currentTheme }: aboutSuhoraProps) => {
    const aspectRatio = 4 / 3

    const backgroundColor = currentTheme === 'light' ? 'gray.200' : '#282b3c';
    const AnimateText = motion(Text)
    const AnimateBox = motion(Box)
    const AnimatedFlex = motion(Flex)

    return (
        <Box backgroundClip={backgroundColor}>
            <Flex
                maxW="6xl"
                mx="auto"
                py={{ base: '4', md: '8', lg: '12' }}
                direction="column"
                gap="2">
                <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                    <AnimateText variants={textVarientSecond} whileInView="show" initial="hidden">
                        <Text as="span">What We</Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>  Stand For </Text>
                    </AnimateText>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
                    <AnimateBox w={{ base: "100%", md: "45%" }} padding={6} variants={homeProductRightToLeft} initial="hidden" whileInView="show">
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={MissionImg} />
                        </AspectRatio>
                    </AnimateBox>
                    <AnimatedFlex w={{ base: "100%", md: "50%" }} direction="column" rowGap={4} pl={6} variants={homeProductLeftToRight} whileInView="show" initial="hidden">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third} pt={5} >Our Mission</Box>
                        <Box fontSize={theme.fonts.description}>Our mission is to empower decision-makers with precise, timely space analytics, transforming multi-sensor satellite data into actionable insights for defense,
                            disaster management, and beyond, fostering a safer, well-informed, and resilient world.</Box>
                    </AnimatedFlex>
                </Flex>

                {/* second */}
                <Flex direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" >
                    <AnimatedFlex w={{ base: "100%", md: "50%" }} direction="column" rowGap={4} pl={6} variants={homeProductRightToLeft} initial="hidden" whileInView="show">
                        <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third} >Our Vision</Box>
                        <Box fontSize={theme.fonts.description}  >
                            Suhora imagines a future where space analytics are woven into the fabric of our world, transforming satellite insights into powerful tools that enhance lives, promote global safety, sustainability, and drive strategic advancement. We aim to make space data universally
                            accessible, establishing it as a key element in shaping a more informed and improved future.
                        </Box>

                    </AnimatedFlex>
                    <AnimateBox w={{ base: "100%", md: "45%" }} padding={6} variants={homeProductLeftToRight} whileInView="show" initial="hidden">
                        <AspectRatio ratio={aspectRatio}>
                            <Image src={VissionImg} />
                        </AspectRatio>
                    </AnimateBox>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Mission