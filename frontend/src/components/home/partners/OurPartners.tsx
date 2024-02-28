import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";

export const OurPartners = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Flex width="100%" py={50} justifyContent="center" overflow="hidden">
            <Box className="slider-container" maxW="5xl">
                <Slider {...settings}>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                    <Flex border="2px" minH={100} alignItems="center" justifyContent="center" shadow="">
                        <h3>1</h3>
                    </Flex>
                </Slider>
            </Box>
        </Flex>
    )
}