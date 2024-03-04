import {
  AspectRatio,
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  ListItem,
  Stack,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { GiCircleCage } from 'react-icons/gi'
import { IoBaseballOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { RiTyphoonLine } from "react-icons/ri"
import { products } from "../../../constant/productCarouselData.ts"
import theme from "../../../theme.ts"
import { Carousel, CarouselSlide, useCarousel } from './Carousel.tsx'
import { Link } from 'react-router-dom'



export const Gallery = () => {

  const spadeIconArray = [<RiTyphoonLine />]
  const lanceIconArray = [<IoBaseballOutline />]
  const sidIconArray = [<GiCircleCage />]

  const aspectRatio = 16/9
  const [currentSlide, setCurrentSlide] = useState(0)

  const [ref, slider] = useCarousel({
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  })

  const hasPrevious = currentSlide !== 0
  const hasNext = currentSlide < products.length - 1

  return (
    <Stack spacing="4" >
      <Box
        position="relative"
        sx={{
          _hover: {
            '> button': {
              display: 'inline-flex',
            },
          },
        }}>
        <Carousel ref={ref} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >
          {products.map((image, i) => (
            <CarouselSlide key={i}>
              <Flex direction={{ base: "column", md: "row" }}>
                <Box w={{ base: "100%", md: "50%" }} padding={7}>
                  <AspectRatio ratio={aspectRatio}>
                    <Image src={image.imageUrl} objectFit="fill"/>
                  </AspectRatio>
                </Box>
                <Flex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="space-between">
                  <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight} color={theme.companyTheme.color.third}>{image.name}</Box>
                  {/* <Box backgroundColor="#BEC1DD" color="#3F53E9" w="fit-content" px="8" fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>SUHORA</Box> */}
                  <Box fontSize={theme.fonts.description}>{image.description}</Box>
                  <UnorderedList listStyleType="hidden" fontSize={theme.fonts.list} marginLeft={0}>
                    <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                      <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                        {
                          image.id === '1' ? (spadeIconArray[0]) : (
                            image.id === '2' ? (lanceIconArray[0]) : (sidIconArray[0])
                          )
                        }
                      </Box>
                      {image.point1}
                    </ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                      <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                        {
                          image.id === '1' ? (spadeIconArray[0]) : (
                            image.id === '2' ? (lanceIconArray[0]) : (sidIconArray[0])
                          )
                        }
                      </Box>
                      {image.point2}</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                      <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                        {
                          image.id === '1' ? (spadeIconArray[0]) : (
                            image.id === '2' ? (lanceIconArray[0]) : (sidIconArray[0])
                          )
                        }
                      </Box>
                      {image.point3}
                    </ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                      <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                        {
                          image.id === '1' ? (spadeIconArray[0]) : (
                            image.id === '2' ? (lanceIconArray[0]) : (sidIconArray[0])
                          )
                        }
                      </Box>
                      {image.point4}
                    </ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" marginTop={4} gap={2}>
                      <Box fontSize={theme.fonts.subHeadingSecond.size} color={theme.companyTheme.color.secondry}>
                        {
                          image.id === '1' ? (spadeIconArray[0]) : (
                            image.id === '2' ? (lanceIconArray[0]) : (sidIconArray[0])
                          )
                        }
                      </Box>
                      {image.point5}
                    </ListItem>
                  </UnorderedList>
                  <Flex justifyContent="">
                    <Link to={image.buttonRedirect}>
                      <Button width="fit-content" px="8" border="1px solid #1266A0" variant="outline" color="#1266A0" _hover={{ backgroundColor: theme.companyTheme.color.secondry, color: "white" }} >
                        Explore More
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </CarouselSlide>
          ))}
        </Carousel>
        {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="-5"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous Slide"
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos="absolute"
            right="-5"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next Slide"
          />
        )}
        <HStack position="absolute" width="full" justify="center" bottom="0" py="4">
          {products.map((_, index) => (
            <Circle key={index} size="2" bg={currentSlide === index ? `${theme.companyTheme.color.secondry}` : `${theme.companyTheme.color.primary}`} />
          ))}
        </HStack>
      </Box>
    </Stack>
  )
}

const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    display="inline-flex"
    fontSize="lg"
    isRound
    boxShadow="base"
    bg={useColorModeValue('white', 'gray.800')}
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    _active={{
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    _focus={{ boxShadow: 'inerhit' }}
    _focusVisible={{ boxShadow: 'outline' }}
    {...props}
  />
)