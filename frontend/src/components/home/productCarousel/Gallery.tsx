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
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { products } from "../../../constant/productCarouselData.ts"
import { Carousel, CarouselSlide, useCarousel } from './Carousel.tsx'
import theme from "../../../theme.ts";
import { StarIcon } from '@chakra-ui/icons'


export const Gallery = () => {
  const aspectRatio = 3 / 3
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
        <Carousel ref={ref} boxShadow='xl'>
          {products.map((image, i) => (
            <CarouselSlide key={i}>
              <Flex direction={{ base: "column", md: "row" }}>
                <Box w={{ base: "100%", md: "50%" }}>
                  <AspectRatio ratio={aspectRatio}>
                    <Image src={image.imageUrl} />
                  </AspectRatio>
                </Box>
                <Flex w={{ base: "100%", md: "50%" }} p={8} direction="column" rowGap={4} justifyContent="center">
                  <Box fontSize={theme.fonts.subHeading.size} fontWeight={theme.fonts.subHeading.weight}>SPADE</Box>
                  <Box backgroundColor="#BEC1DD" color="#3F53E9" w="fit-content" px="8" fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight}>SUHORA</Box>
                  <Box fontSize={theme.fonts.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum repudiandae obcaecati sapiente magnam! Officiis quae, similique minus harum quas eum, quidem vero labore magni iste.</Box>
                  <UnorderedList listStyleType="none" fontSize={theme.fonts.list}>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                  </UnorderedList>
                  <Button width="fit-content" px="8" backgroundColor={theme.companyTheme.color.secondry} color="white" _hover={{ backgroundColor: theme.companyTheme.color.primary }}>
                    Learn More
                  </Button>
                </Flex>
              </Flex>
            </CarouselSlide>
          ))}
        </Carousel>
        {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="3"
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
            right="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next Slide"
          />
        )}
        <HStack position="absolute" width="full" justify="center" bottom="0" py="4">
          {products.map((_, index) => (
            <Circle key={index} size="2" bg={currentSlide === index ? 'white' : 'whiteAlpha.400'} />
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