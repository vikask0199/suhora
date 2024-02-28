
import {
  AspectRatio,
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  Image,
  Stack,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  Heading,
  List,
  ListItem,
  ListIcon,
  UnorderedList
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { products } from "../../../constant/productCarouselData.ts"
import theme from "../../../theme.ts"
import { Carousel, CarouselSlide, useCarousel } from './Carousel.tsx'


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
         
        <Carousel ref={ref} boxShadow='xl' >
       
          {products.map((image, i) => (
            <CarouselSlide key={i} >
              <Flex direction={{ base: "column", md: "row-reverse" }}>
                <Box w= '40em' p='3em' >
                  <AspectRatio ratio={aspectRatio}>
                    <Image src={image.imageUrl} />
                  </AspectRatio>
                </Box>
                <Flex w='100%' p={8} direction="column" rowGap={8}  >
                  
                  <Grid   templateColumns='repeat(2, 1fr)'fontSize={theme.fonts.description} gap={6}>
                    <GridItem>
                    <Heading fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} p='1em' >Lorem ipsum dolor sit</Heading>
                 <UnorderedList listStyleType="none" fontSize={theme.fonts.list}>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                  </UnorderedList>
                   
                    </GridItem>
                  
                    <GridItem>
                    <Heading fontSize={theme.fonts.subHeadingSecond.size} fontWeight={theme.fonts.subHeadingSecond.weight} p='1em' >Lorem ipsum dolor sit</Heading>
                    <UnorderedList listStyleType="none" fontSize={theme.fonts.list}>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                    <ListItem display="flex" mb="2" alignItems="center" gap={2}><StarIcon color={theme.companyTheme.color.secondry}/> Item 1 Lorem, ipsum.</ListItem>
                  </UnorderedList>
                   
                    </GridItem>
                   
                  
                  </Grid>
                
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