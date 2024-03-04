import { AspectRatio, Box, Flex, Image, Modal, ModalContent, ModalOverlay, Spinner, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Galleries() {

    const [images, setImages] = useState<{ name: string; url: string }[]>([]);

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

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const [imageUrl, setImageUrl] = useState("")
    const [imageName, setImageName] = useState("")

    return (
        <Flex minH="80vh" px={{ base: '4', md: '8', lg: '5' }} py={{ base: '16', md: '20', lg: '24' }} justifyContent="center">
            <Box maxW="6xl" h="100%" w="100%">
                <Flex gap="5" wrap="wrap" justifyContent="center" >
                    {
                        images.length > 0 ? (
                            images.map((image, index) => {
                                return (
                                    <Box key={index} h="60" w="60" >
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
                                    </Box>
                                )
                            })
                        ) : (
                            <Flex alignItems="center" justifyContent="center"  h="50vh" w="100%">
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