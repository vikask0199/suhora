import { AspectRatio, Box, Flex, Image, Modal, ModalContent, ModalOverlay, Spinner, Stack, Tab, TabPanel, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { tab1, tab2, tab3, tab4, textVarientDelayMedium, textVarientSecond } from "../../animation";
import theme from "../../theme";


const AnimatedText = motion(Text)
const AnimatedTab = motion(Tab)
const AnimatedBox = motion(Box)



function Galleries() {

    const [images, setImages] = useState<{ name: string; url: string }[]>([]);
    const [sarImages, setSarImages] = useState<{ name: string; url: string }[]>([]);
    const [thermalImages, setThermalImages] = useState<{ name: string; url: string }[]>([]);
    const [opticalImages, setOpticalImages] = useState<{ name: string; url: string }[]>([]);
    const [selectedTab, setSelectedTab] = useState<string>('All Images');

    useEffect(() => {
        const fetchImages = async () => {
            const imagesObject = await import.meta.glob('../../assets/img/gallery/*.{png,jpg,svg,webp}');
            const imageList: { name: string; url: string }[] = [];

            for (const imagePath in imagesObject) {
                const imageUrl = await imagesObject[imagePath]() as any;
                const imageName = imagePath.split('/').pop()?.split('.')[0] || '';
                imageList.push({ name: imageName, url: imageUrl.default });
            }
            setImages(imageList);
        };
        fetchImages();
    }, []);

    const handleTabSelect = (tabName: string) => {
        setSelectedTab(tabName);
        filterImages();
    };

    const filterImages = () => {
        const filteredSarImages = images.filter(image => image.name.toLowerCase().includes('sar'));
        const filteredThermalImages = images.filter(image => image.name.toLowerCase().includes('thermal'));
        const filteredOpticalImages = images.filter(image => image.name.toLowerCase().includes('optical'));

        setSarImages(filteredSarImages);
        setThermalImages(filteredThermalImages);
        setOpticalImages(filteredOpticalImages);
    };

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageUrl, setImageUrl] = useState("")
    const [imageName, setImageName] = useState("")

    return (
        <Flex direction="column" align="center" px={{ base: '4', md: '8', lg: '5' }} py={{ base: '4', md: '8', lg: '12' }} pb={20} justifyContent="center">
            <Stack >
                <Stack >
                    <Flex justifyContent="center" fontSize={theme.fonts.mainHeading.size} fontWeight={theme.fonts.mainHeading.weight} >
                        <AnimatedText variants={textVarientDelayMedium} whileInView="show" initial="hidden">
                            <Text as="span" color={theme.companyTheme.color.secondry} >Our </Text>
                            <Text as="span">Gallery </Text>
                        </AnimatedText>
                    </Flex>

                </Stack>
            </Stack>

            <Tabs >
                <Flex justifyContent="center" mt="5">
                    <AnimatedTab variants={tab1} whileInView="show" initial="hidden" onClick={() => handleTabSelect('All Images')} color={`${selectedTab === "All Images" ? `${theme.companyTheme.color.secondry}` : ''}`} fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>All Images</AnimatedTab>
                    <AnimatedTab variants={tab2} whileInView="show" initial="hidden" onClick={() => handleTabSelect('SAR')} color={`${selectedTab === "SAR" ? `${theme.companyTheme.color.secondry}` : ''}`} fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>SAR</AnimatedTab>
                    <AnimatedTab variants={tab3} whileInView="show" initial="hidden" onClick={() => handleTabSelect('Thermal')} color={`${selectedTab === "Thermal" ? `${theme.companyTheme.color.secondry}` : ''}`} fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>Thermal</AnimatedTab>
                    <AnimatedTab variants={tab4} whileInView="show" initial="hidden" onClick={() => handleTabSelect('Optical')} color={`${selectedTab === "Optical" ? `${theme.companyTheme.color.secondry}` : ''}`} fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>Optical</AnimatedTab>
                </Flex>
                <TabPanels maxW="6xl" h="auto" mt="5">
                    <TabPanel>
                        <Flex gap="5" flexWrap="wrap" justifyContent="center" rowGap="20">
                            {
                                images.length > 0 ? (
                                    images.map((image, index) => {
                                        return (
                                            <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" key={index} boxSize='xs' position="relative" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s ease' }}>
                                                <AspectRatio ratio={3 / 3}>
                                                    <Image
                                                        rounded="xl"
                                                        boxShadow="xl"
                                                        key={index}
                                                        src={image.url}
                                                        alt={image.name}
                                                        onClick={() => {
                                                            setOverlay(<OverlayOne />)
                                                            onOpen()
                                                            setImageUrl(image.url)
                                                            setImageName(image.name)
                                                        }}
                                                    />
                                                </AspectRatio>
                                                <Flex justifyContent="center" flexDirection="column"  color="#174773" alignItems="center" textAlign="center" width="90%" rounded="lg" background="white" position="absolute" boxShadow="xl" height="20" bottom="-10" left="4">
                                                    <Flex gap="1">
                                                        <Text>
                                                            {image.name.split("_")[0]}
                                                        </Text>
                                                        <Text>
                                                            ({image.name.split("_")[1]})
                                                        </Text>
                                                        <Text>
                                                            {image.name.split("_")[2]}
                                                        </Text>
                                                    </Flex>
                                                    <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                                        {image.name.split("_")[3]}
                                                    </Text>
                                                </Flex>
                                            </AnimatedBox>
                                        )
                                    })
                                ) : (
                                    <Flex alignItems="center" justifyContent="center" h="50vh" w="100%">
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='blue.500'
                                            size='xl'
                                        />
                                    </Flex>
                                )
                            }
                        </Flex>
                    </TabPanel>


                    <TabPanel>
                        <Flex gap="5" wrap="wrap" justifyContent="center" rowGap="20">
                            {
                                sarImages.length > 0 ? (
                                    sarImages.map((image, index) => {
                                        return (
                                            <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" key={index} boxSize='xs' position="relative" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s ease' }}>
                                                <AspectRatio ratio={3 / 3}>
                                                    <Image
                                                        rounded="xl"
                                                        boxShadow="xl"
                                                        key={index}
                                                        src={image.url}
                                                        alt={image.name}
                                                        onClick={() => {
                                                            setOverlay(<OverlayOne />)
                                                            onOpen()
                                                            setImageUrl(image.url)
                                                            setImageName(image.name)
                                                        }}
                                                    />
                                                </AspectRatio>
                                                <Flex justifyContent="center" flexDirection="column"  color="#174773" alignItems="center" textAlign="center" width="90%" rounded="lg" background="white" position="absolute" boxShadow="xl" height="20" bottom="-10" left="4">
                                                    <Flex gap="1">
                                                        <Text>
                                                            {image.name.split("_")[0]}
                                                        </Text>
                                                        <Text>
                                                            ({image.name.split("_")[1]})
                                                        </Text>
                                                        <Text>
                                                            {image.name.split("_")[2]}
                                                        </Text>
                                                    </Flex>
                                                    <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                                        {image.name.split("_")[3]}
                                                    </Text>
                                                </Flex>
                                            </AnimatedBox>
                                        )
                                    })
                                ) : (
                                    <Flex alignItems="center" justifyContent="center" h="50vh" w="100%">
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='blue.500'
                                            size='xl'
                                        />
                                    </Flex>
                                )
                            }
                        </Flex>
                    </TabPanel>

                    {/* thermal */}
                    <TabPanel>
                        <Flex gap="5" wrap="wrap" justifyContent="center" rowGap="20">
                            {
                                thermalImages.length > 0 ? (
                                    thermalImages.map((image, index) => {
                                        return (
                                            <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" key={index} boxSize='xs' position="relative" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s ease' }}>
                                                <AspectRatio ratio={3 / 3}>
                                                    <Image
                                                        rounded="xl"
                                                        boxShadow="xl"
                                                        key={index}
                                                        src={image.url}
                                                        alt={image.name}
                                                        onClick={() => {
                                                            setOverlay(<OverlayOne />)
                                                            onOpen()
                                                            setImageUrl(image.url)
                                                            setImageName(image.name)
                                                        }}
                                                    />
                                                </AspectRatio>
                                                <Flex justifyContent="center" flexDirection="column"  color="#174773" alignItems="center" textAlign="center" width="90%" rounded="lg" background="white" position="absolute" boxShadow="xl" height="20" bottom="-10" left="4">
                                                    <Flex gap="1">
                                                        <Text>
                                                            {image.name.split("_")[0]}
                                                        </Text>
                                                        <Text>
                                                            ({image.name.split("_")[1]})
                                                        </Text>
                                                        <Text>
                                                            {image.name.split("_")[2]}
                                                        </Text>
                                                    </Flex>
                                                    <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                                        {image.name.split("_")[3]}
                                                    </Text>
                                                </Flex>
                                            </AnimatedBox>
                                        )
                                    })
                                ) : (
                                    <Flex alignItems="center" justifyContent="center" h="50vh" w="100%">
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='blue.500'
                                            size='xl'
                                        />
                                    </Flex>
                                )
                            }
                        </Flex>
                    </TabPanel>

                    {/* optical */}
                    <TabPanel>
                        <Flex gap="5" rowGap="20" wrap="wrap" justifyContent="center" >
                            {
                                opticalImages.length > 0 ? (
                                    opticalImages.map((image, index) => {
                                        return (
                                            <AnimatedBox variants={textVarientSecond} whileInView="show" initial="hidden" key={index} boxSize='xs' position="relative" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s ease' }}>
                                                <AspectRatio ratio={3 / 3}>
                                                    <Image
                                                        rounded="xl"
                                                        boxShadow="xl"
                                                        key={index}
                                                        src={image.url}
                                                        alt={image.name}
                                                        onClick={() => {
                                                            setOverlay(<OverlayOne />)
                                                            onOpen()
                                                            setImageUrl(image.url)
                                                            setImageName(image.name)
                                                        }}
                                                    />
                                                </AspectRatio>
                                                <Flex justifyContent="center" flexDirection="column"  color="#174773" alignItems="center" textAlign="center" width="90%" rounded="lg" background="white" position="absolute" boxShadow="xl" height="20" bottom="-10" left="4">
                                                    <Flex gap="1">
                                                        <Text>
                                                            {image.name.split("_")[0]}
                                                        </Text>
                                                        <Text>
                                                            ({image.name.split("_")[1]})
                                                        </Text>
                                                        <Text>
                                                            {image.name.split("_")[2]}
                                                        </Text>
                                                    </Flex>
                                                    <Text fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>
                                                        {image.name.split("_")[3]}
                                                    </Text>
                                                </Flex>
                                            </AnimatedBox>
                                        )
                                    })
                                ) : (
                                    <Flex alignItems="center" justifyContent="center" h="50vh" w="100%">
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='blue.500'
                                            size='xl'
                                        />
                                    </Flex>
                                )
                            }
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Box maxW="6xl" h="100%" w="100%">
                <Modal isCentered isOpen={isOpen} size="4xl" onClose={onClose}>
                    {overlay}
                    <ModalContent>
                        <Box>
                            <AspectRatio ratio={3 / 2}>
                                <Image src={imageUrl} alt={imageName} objectFit="cover" />
                            </AspectRatio>
                        </Box>
                    </ModalContent>
                </Modal>
            </Box>
        </Flex>
    )
}

export default Galleries