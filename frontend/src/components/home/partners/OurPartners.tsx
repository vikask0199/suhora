import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ICEYE_white from "../../../assets/img/partners/ICEYE_white.png"
import Iceyedark from "../../../assets/img/partners/Iceyedark.png"
import planet_white from "../../../assets/img/partners/planet_white.png"
import planetdark from "../../../assets/img/partners/planetdark.png"
import restec_white from "../../../assets/img/partners/restec_white.png"
import restecdark from "../../../assets/img/partners/restecdark.png"
import Satellogic_white from "../../../assets/img/partners/Satellogic_white.png"
import satellogicdark from "../../../assets/img/partners/satellogicdark.png"
import satvudark from "../../../assets/img/partners/satvudark.png"
import vengdark from "../../../assets/img/partners/vengdark.png"
import theme from "../../../theme";
import { motion } from "framer-motion";
import { textVarient } from "../../../animation";

type ourPartnersProps = {
    currentTheme: string;
}


export const OurPartners = ({ currentTheme }: ourPartnersProps) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: -5000,
        speed: 3000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,

                }
            }
        ]
    };

    const AnimateText = motion(Text)


    return (
        <Flex width="100%" pb={{ base: '16', md: '12' }} pt={{ base: '20', md: '16' }} justifyContent="center" alignItems="center" overflow="hidden" flexDirection="column" gap={12}>
            <Stack spacing={{ base: '4', md: '5' }} direction="column">
                <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight}>
                    <AnimateText variants={textVarient} whileInView="show" initial="hidden">
                        <Text as="span">Our Amazing </Text>
                        <Text as="span" color={theme.companyTheme.color.secondry}>Partners</Text>
                    </AnimateText>
                </Flex>
                <Text fontSize={theme.fonts.subHeading.size} color={theme.companyTheme.color.third} fontWeight={theme.fonts.subHeading.weight} textAlign="center">
                    {/* Everything you need to build modern UI and great products. */}
                </Text>
            </Stack>
            <Box className="slider-container" maxW="6xl">
                <Slider {...settings}>
                    <Box>
                        <Flex my={5}   alignItems="center" justifyContent="center"  height={50} border="1px" borderColor={`${currentTheme === 'light' ? 'white': "#1A202C"}`}>
                            <img src={currentTheme === 'light' ? Iceyedark : ICEYE_white} alt="ICEYE" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex  my={5}  alignItems="center" justifyContent="center" height={50}>
                            <img src={currentTheme === 'light' ? planetdark : planet_white} alt="PLANET" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                        </Flex>
                    </Box>
                    <Box>
                        <Flex  my={5}  alignItems="center" justifyContent="center" height={50}>
                            <img src={currentTheme === 'light' ? restecdark : restec_white} alt="RESTEC" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex  my={5}  alignItems="center" justifyContent="center" height={50}>
                            <img src={currentTheme === 'light' ? satellogicdark : Satellogic_white} alt="SATTELOGIC" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex  my={5} alignItems="center" justifyContent="center"  height={50}>
                            <img src={satvudark} alt="SATVU" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex  my={5}  alignItems="center" justifyContent="center" height={50}>
                            <img src={vengdark} alt="VENG" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                        </Flex>
                    </Box>
                </Slider>
            </Box>
        </Flex>
    )
}